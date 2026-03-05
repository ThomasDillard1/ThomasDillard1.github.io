# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Thomas Dillard, hosted on GitHub Pages at https://thomasdillard1.github.io.

## Technology Stack

- **Static site** - Pure HTML/CSS/JavaScript, no build tools
- **Bootstrap 5.3.0** - Loaded via CDN for responsive grid and components
- **Bootstrap Icons 1.9.1** - Loaded via CDN

## Development

No build commands required. Open `index.html` in a browser or use VS Code Live Server (configured for port 5501).

Changes deploy automatically when pushed to main branch via GitHub Pages.

## Architecture

- `index.html` - Single-page layout with navbar and project showcase cards
- `index.css` - Minimal custom styles (card sizing, responsive tweaks, color overrides)
- `index.js` - Single responsive behavior function for profile image border
- `images/` - Static assets including profile photo and project thumbnails

## Color Scheme

- Navy: #232D4B
- Blue: #365475
- Off-white: #F7F9FF
- Orange accent: #E57200
