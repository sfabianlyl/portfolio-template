# Portfolio — React + Vite + Tailwind CSS

A single-page developer portfolio: sticky navbar, hero, about, skills, project
grid and a contact section with a `mailto:` link. Everything is static — there
is no backend, no database and no analytics, so the built site can be hosted on
any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, …).

All copy is **placeholder text on purpose**, and all of it now lives in one
folder: `src/data/`. Search for `EDIT ME` / `PLACEHOLDER` and swap in your own
details — you never need to open a component.

---

## Tech stack

| Layer    | Tool                                                         |
| -------- | ------------------------------------------------------------ |
| UI       | React 18 (function components + hooks)                        |
| Build    | Vite 5 (`@vitejs/plugin-react`)                               |
| Styling  | Tailwind CSS 3 (via PostCSS + Autoprefixer)                   |
| Language | JavaScript (ESM, `.jsx`), no TypeScript                       |
| Icons    | Inline SVGs in `src/components/Icons.jsx` — no icon package   |

There is no router, no state library and no CSS-in-JS: the page is one scroll,
and navigation happens with same-page anchors (`#home`, `#about`, `#skills`,
`#projects`, `#contact`).

**Requires Node.js 18+** (Node 20 LTS recommended) and npm.

---

## Setup — run these manually

Installing dependencies and building are **intentionally left to you**: nothing
has been installed or built on your behalf, and both `node_modules/` and `dist/`
are git-ignored and absent from the repo. Run the commands yourself from the
repo root:

```bash
# 1. Install dependencies (creates node_modules/)
npm install

# 2. Start the dev server with hot reload — http://localhost:5173
npm run dev

# 3. Production build (outputs static files to dist/)
npm run build

# 4. Serve the dist/ build locally to verify it before deploying
npm run preview
```

| Script            | What it does                                                                  |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run dev`     | Vite dev server with HMR at `http://localhost:5173`                            |
| `npm run build`   | Bundles for production into `dist/`                                            |
| `npm run preview` | Serves `dist/` locally (`http://localhost:4173`) — run it *after* `npm run build` |

> There is no `lint` or `test` script in this project yet.

Deploying = upload the contents of `dist/`. If you host under a sub-path
(e.g. `https://user.github.io/portfolio/`), set `base: '/portfolio/'` in
`vite.config.js` before running `npm run build`.

---

## File structure

```
.
├── index.html                  # HTML entry point — its title + meta are filled in by site.js
├── package.json                # Scripts + dependencies
├── postcss.config.js           # Tailwind CSS + Autoprefixer
├── tailwind.config.js          # Content paths + the single `accent` color (EDIT ME)
├── vite.config.js              # Vite + React plugin + the site-meta head injector
└── src
    ├── main.jsx                # React root, imports index.css
    ├── App.jsx                 # Page order, skip link, <main> landmark
    ├── index.css               # Tailwind layers + smooth scroll, scroll offset, focus ring
    ├── components              # Markup + behaviour only — no sentences live in here
    │   ├── Navbar.jsx          # Sticky bar, desktop links, mobile menu (Escape closes it)
    │   ├── Hero.jsx            # #home — greeting, name, role, tagline, calls to action
    │   ├── About.jsx           # #about — bio paragraphs
    │   ├── Skills.jsx          # #skills — grouped tag pills
    │   ├── Projects.jsx        # #projects — responsive 1/2/3-column grid
    │   ├── ProjectCard.jsx     # One card: title, description, tags, demo/source links
    │   ├── Contact.jsx         # #contact — mailto CTA + social links
    │   ├── Footer.jsx          # Copyright, footer nav, back to top
    │   ├── Section.jsx         # Shared section shell: anchor id, heading, width, padding
    │   ├── SocialLinks.jsx     # Renders src/data/socials.js as labelled icon buttons
    │   └── Icons.jsx           # Inline SVG icons (currentColor, aria-hidden)
    └── data                    # ← EVERYTHING YOU EDIT LIVES HERE
        ├── index.js            # Barrel — the one import every component uses
        ├── site.js             # Tab title, SEO description, lang, theme color, footer note
        ├── navigation.js       # Navbar links + footer links
        ├── profile.js          # Name, role, email
        ├── socials.js          # Social links (id, label, href, icon) — add networks here
        ├── content.js          # Eyebrows, headings, paragraphs, hero buttons, empty state
        ├── skills.js           # Skill groups + the optional line under them
        └── projects.js         # Project cards (id, title, description, tags, links)
```

### Where to customize

| What you want to change                                   | File                                  |
| --------------------------------------------------------- | ------------------------------------- |
| Name, role, email (navbar, hero, footer, mailto)          | `src/data/profile.js`                 |
| Browser tab title + SEO summary + theme color             | `src/data/site.js`                    |
| Navbar + footer links, or a whole section                 | `src/data/navigation.js`              |
| Social links (add a network)                              | `src/data/socials.js`                 |
| Headings, tagline, bio, contact copy, hero buttons        | `src/data/content.js`                 |
| Skills (the groups, and the small line beneath them)      | `src/data/skills.js`                  |
| Projects (add/remove/edit)                                | `src/data/projects.js`                |
| Accent color across the whole site                        | `accent` in `tailwind.config.js`      |

Each value is written exactly once, and the files read each other where they
overlap: `site.js` builds the tab title and the SEO description from
`profile.js`, and `navigation.js` builds the footer links from the navbar links
— so renaming yourself or a section changes every place it appears.

**`index.html` needs no editing.** Its `<title>`, `<meta name="description">`,
`<meta name="theme-color">` and `<html lang>` are fallbacks; the
`portfolio:site-meta` plugin in `vite.config.js` rewrites them from
`src/data/site.js` on every `npm run dev` and every `npm run build`.

Adding a project is just another object in the `projects` array; `links` is
optional — omit `demo`, `source`, or the whole object and those links are not
rendered.

Adding a social network is one object in `src/data/socials.js`
(`{ id, label, href, icon }`, e.g. `{ id: 'x', label: 'X', href: '…', icon: 'x' }`).
The `icon` key selects the artwork from the registry in `SocialLinks.jsx`
(`dribbble`, `github`, `instagram`, `linkedin`, `x`); an unknown or missing key
falls back to a generic external-link icon, so a new entry always renders.

### How the data is wired (only when you add a section)

`src/data/index.js` re-exports every file in the folder, and every component
imports from it exactly one way:

```js
import { content, profile } from '../data/index.js'
```

Keep that style — one import line, named values, always from
`../data/index.js` rather than from an individual data file. Adding a new data
file is then three lines in the barrel: one `import`, one name in the
`export { … }` list, and the same name in the default object.

Components deliberately keep only *structural* labels — "Skip to content",
"Open menu" / "Close menu", and the `aria-label` wording on icon links — because
those are accessibility plumbing rather than copy. Everything a visitor
reads comes out of `src/data`.

---

## Layout & accessibility notes

Already handled — worth keeping if you extend the page:

- **Semantic landmarks** — `<header>` (navbar), `<main>`, one `<section>` per
  anchor, `<article>` per project card, `<footer>`. Every `<section>` is
  labelled by its own heading through `aria-labelledby`.
- **Heading order** — one `<h1>` (hero), `<h2>` per section, `<h3>` for card and
  skill-group titles. Lists are real `<ul>`/`<li>`.
- **Smooth scrolling with a sticky navbar** — `scroll-behavior: smooth` plus
  `scroll-padding-top: 4.5rem` in `src/index.css`, and `scroll-mt-20` on every
  section, so an anchor jump never leaves a heading hidden under the bar. It
  falls back to instant jumps when the OS requests `prefers-reduced-motion`.
- **Keyboard support** — "Skip to content" is the first tab stop, and one
  `:focus-visible` accent outline (≈10:1 on the dark background) marks every
  link and button without ever appearing on mouse clicks. The mobile menu button
  exposes `aria-expanded` / `aria-controls` and closes on `Escape` or on link
  click.
- **Color contrast** — body and small-print text uses `neutral-300`/`neutral-400`
  on `neutral-950` (≥7:1) and the accent green is ≈10:1, comfortably above WCAG
  AA.
- **Decorative vs meaningful graphics** — icons are `aria-hidden="true"`; the
  link around them carries the accessible name (`aria-label`), including an
  "opens in a new tab" hint for `target="_blank"` links.
- **Responsive** — max width `max-w-5xl`, mobile-first Tailwind breakpoints
  (`sm` / `md` / `lg`), hamburger menu below `md`, balanced headings
  (`text-balance`) and wrapping rows (`flex-wrap`).
