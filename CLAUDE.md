# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page marketing site at mattlevene.com/mfm — a leadership assessment showcase for the My First Million podcast. Static HTML/CSS/JS built with Vite, deployed on Vercel.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Build to `dist/`
- `npm run preview` — Preview production build locally

## Architecture

- `mfm/index.html` — The single page (entry point configured in vite.config.js)
- `mfm/style.css` — All styles; uses CSS custom properties for theming
- `mfm/main.js` — Scroll animations (IntersectionObserver), mobile nav, expand/collapse cards, stat counters
- `public/` — Static assets (images, video) copied as-is to dist
- `vite.config.js` — Entry point: `mfm/index.html`, output: `dist/`, public dir: `public/`
- `vercel.json` — Vercel deployment config

## Design Tokens

- Background: `#000` (--bg)
- Gold accent: `#CFAA5B` (--gold)
- Muted text: `#888888` (--text-muted) — kept lighter for readability on black
- Minimum font size: 14px (0.875rem)

## Key Rules

- **Do not modify the wording or punctuation of assessment answers.** Content is verbatim from the user.
- Page is hidden from search engines (noindex meta tag).
- Headshot is circular (border-radius: 50%) with object-position: top center to crop out watermark.
- Video testimonial: `.mov` source with `.mp4` fallback planned (ffmpeg conversion pending).
