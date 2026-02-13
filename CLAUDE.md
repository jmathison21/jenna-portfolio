# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jenna Mathison built with Next.js 16.1, React 19, TypeScript, and Tailwind CSS 4. Deployed via Docker on port 5000 behind Cloudflare.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run upgrade  # Upgrade Next.js and related deps
npm start        # Start production server
npm run lint     # ESLint
npm run lint:fix # ESLint with auto-fix
```

## Architecture

- **Framework:** Next.js 16 App Router (`src/app/`)
- **Styling:** Tailwind CSS 4 with CSS custom properties for theming (light/dark via `next-themes`)
- **Path alias:** `@/*` maps to `./src/*`
- **Node requirement:** >= 22.0.0

### Theme System

Theme toggling uses `next-themes` with a class strategy on `<html>`. CSS variables for `--background`, `--background-gradient`, and `--foreground` are defined in `globals.css` under `:root` (light) and `.dark` selectors. The `ThemeSwitch` component is a client component that toggles between themes.

### Layout Hierarchy

`RootLayout` wraps content in `Providers` (ThemeProvider) and renders a fixed transparent `Header` with navigation and theme toggle. Each route group (`/about`, `/projects`, `/contact`) has its own layout file.

### Current State

Home page is complete with a hero section. About, Projects, and Contact pages are scaffolded but need content. The README describes planned features including project cards, biography sections, and a contact form.
