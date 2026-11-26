// Pulse Data landing page behaviour. No inline scripts, so the CSP can stay strict.
(() => {
  'use strict';

  // Hero: the grease-pencil select mark draws in once, the page's one authored motion.
  const marks = document.getElementById('selectMarks');
  if (marks) {
    marks.querySelectorAll('path').forEach((p) => {
      p.style.setProperty('--len', String(Math.ceil(p.getTotalLength()) + 2));
    });
    requestAnimationFrame(() => setTimeout(() => marks.classList.add('is-on'), 350));
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

  // Sample request form: client-side checks only. Server-side validation is still required
  // once a backend is connected.
  const form = document.getElementById('requestForm');
  const msg = document.getElementById('formMsg');
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const setMsg = (text, kind) => {
    msg.textContent = text;
    msg.className = 'form__msg' + (kind ? ' ' + kind : '');
  };

  if (form && msg) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      // Honeypot: bots fill hidden fields, people don't.
      if (String(data.get('website') || '').trim() !== '') return;

      let firstBad = null;
      form.querySelectorAll('[required]').forEach((el) => {
        const v = String(el.value || '').trim();
        const bad = !v || (el.type === 'email' && !EMAIL.test(v));
        el.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = el;
      });
      if (firstBad) {
        setMsg('Please fill in your name, a valid work email, company and team.', 'err');
        firstBad.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      setMsg('Sending…');

      // TODO: send to your form backend over HTTPS, for example:
      // await fetch('/api/sample-request', { method: 'POST', body: data });
      // Then add that endpoint's origin to the CSP's connect-src or form-action.
      await new Promise((r) => setTimeout(r, 500));

      form.reset();
      btn.disabled = false;
      setMsg('Thanks. We will be in touch about your sample.', 'ok');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
