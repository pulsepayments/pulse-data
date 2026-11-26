// Pulse Data landing page behaviour. No inline scripts, so the CSP can stay strict.
(() => {
  'use strict';
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav gains its blurred background once the page scrolls (Linear behaviour).
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Blur-up reveal on scroll (Lemni behaviour). Content stays visible without JS.
  const items = document.querySelectorAll('.rv');
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('js');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  // Labelling viewer: show or hide annotations.
  const viewer = document.getElementById('viewer');
  const toggle = document.getElementById('labelToggle');
  if (viewer && toggle) {
    toggle.addEventListener('click', () => {
      const on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', String(on));
      viewer.dataset.labels = on ? 'on' : 'off';
    });
  }

  // Sample request form: client-side checks only. Validate again on the server once
  // a backend is connected (see SECURITY.md).
  const form = document.getElementById('requestForm');
  const msg = document.getElementById('formMsg');
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const setMsg = (text, kind) => { msg.textContent = text; msg.className = 'form__msg' + (kind ? ' ' + kind : ''); };

  if (form && msg) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      if (String(data.get('website') || '').trim() !== '') return; // honeypot

      let firstBad = null;
      form.querySelectorAll('[required]').forEach((el) => {
        const v = String(el.value || '').trim();
        const bad = !v || (el.type === 'email' && !EMAIL.test(v));
        el.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = el;
      });
      if (firstBad) {
        setMsg('Add your name, a valid work email, company and team.', 'err');
        firstBad.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      setMsg('Sending…');
      // TODO: POST `data` over HTTPS to your form backend, and add its origin to the CSP.
      await new Promise((r) => setTimeout(r, 500));
      form.reset();
      btn.disabled = false;
      setMsg('Thanks. We will be in touch about your sample.', 'ok');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
