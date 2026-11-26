#!/bin/sh
# Copies only the public website files into dist/ for Cloudflare Pages.
# Internal files (.claude/, PRODUCT.md, DESIGN.md, docs/, .impeccable/) never go live.
set -e
rm -rf dist
mkdir -p dist/assets
cp index.html labs.html sellers.html favicon.svg styles.css main.js _headers dist/
cp assets/*.webp assets/*.png dist/assets/
