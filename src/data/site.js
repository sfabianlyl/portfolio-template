/*
 * ---------------------------------------------------------------------------
 * SITE CONFIG — the site-wide settings reused by the document head
 * (index.html, injected at build time by the `portfolio:site-meta` plugin in
 * vite.config.js), the footer and anywhere else a global string is needed, so
 * you only edit them in one place.
 * ---------------------------------------------------------------------------
 *
 * Field reference:
 *   name        {string}   Full name used in the footer copyright and in the
 *                          default document title/description.
 *   shortName   {string}   First name only — for tight spaces (logo, OG card).
 *   title       {string}   <title> of the page, i.e. the browser tab and the
 *                          search-result headline. Keep it under ~60 chars.
 *   description {string}   <meta name="description"> — one SEO sentence
 *                          (~150 chars) summarising who you are.
 *   lang        {string}   BCP-47 language tag for <html lang>.
 *   themeColor  {string}   <meta name="theme-color"> — the mobile browser
 *                          chrome color; keep it in sync with the page
 *                          background (bg-neutral-950 = #0a0a0a).
 *   builtWith   {string}   Small print in the footer.
 *   links       {object}   Site-level external links (see below).
 */

export const site = {
  // EDIT ME: your full name.
  name: 'Fabian Lee',
  // EDIT ME: the short form of your name.
  shortName: 'Fabian',
  // EDIT ME: browser tab title — "<name> - <role>" reads well in search.
  title: 'Fabian Lee - Software Developer',
  // EDIT ME: one SEO sentence (~150 characters) about you.
  description:
    'Fabian Lee is a software developer who builds fast, accessible web applications with React, Node.js and modern tooling.',
  // EDIT ME: only change this if the site is not in English.
  lang: 'en',
  // EDIT ME: must match the dark page background in src/index.css.
  themeColor: '#0a0a0a',
  // EDIT ME: footer small print.
  builtWith: 'Built with React & Tailwind CSS',
  /*
   * Site-level external links. Not the social icons — those live in
   * src/data/socials.js (also exposed as profile.socials) and are rendered by
   * SocialLinks.jsx. Nothing renders these two yet; add a consumer (footer,
   * hero) when you want them on the page.
   */
  links: {
    // EDIT ME: the public repository backing this portfolio.
    source: 'https://github.com/sfabianlyl/sfabianlyl-portfolio',
    // EDIT ME: a hosted CV/résumé (PDF or page); remove the key to hide it.
    resume: 'https://example.com/fabian-lee-cv.pdf',
  },
}

export default site
