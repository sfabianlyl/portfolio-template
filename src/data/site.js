/*
 * ---------------------------------------------------------------------------
 * SITE CONFIG — the site-wide settings used by the document head (index.html,
 * injected at build time by the `portfolio:site-meta` plugin in
 * vite.config.js) and by the footer. This is the only place the tab title, the
 * SEO description and the theme color are written.
 * ---------------------------------------------------------------------------
 *
 * Your name, role and email are NOT written here — src/data/profile.js owns
 * them, and this file imports them, so changing your name in one place updates
 * the navbar, the hero, the footer, the browser tab and the search snippet
 * together.
 *
 * Field reference:
 *   title       {string}   <title> of the page, i.e. the browser tab and the
 *                          search-result headline. Built as "<name> - <role>",
 *                          which reads well in search; keep the result under
 *                          ~60 characters.
 *   description {string}   <meta name="description"> — one SEO sentence
 *                          (~150 characters). It opens with your name and role;
 *                          EDIT ME the part after them.
 *   lang        {string}   BCP-47 language tag for <html lang>.
 *   themeColor  {string}   <meta name="theme-color"> — the mobile browser
 *                          chrome color; keep it in sync with the page
 *                          background (bg-neutral-950 = #0a0a0a).
 *   builtWith   {string}   Small print in the footer.
 *   links       {object}   Site-level external links (see below).
 */

import { profile } from './profile.js'

export const site = {
  // Derived from profile.js — change your name or role there, not here.
  title: `${profile.name} - ${profile.role}`,
  /*
   * EDIT ME: the sentence after your name and role. The opening
   * "<name> is a <role>" comes from profile.js, so the name never has to be
   * retyped here. Limitation worth knowing: if your role starts with a vowel
   * sound ('iOS Developer'), change the 'a' below to 'an'.
   */
  description: `${profile.name} is a ${profile.role.toLowerCase()} who builds fast, accessible web applications with React, Node.js and modern tooling.`,
  // EDIT ME: only change this if the site is not in English.
  lang: 'en',
  // EDIT ME: must match the dark page background in src/index.css.
  themeColor: '#0a0a0a',
  // EDIT ME: footer small print.
  builtWith: 'Built with React & Tailwind CSS',
  /*
   * Site-level external links, kept here because they belong to the site as a
   * whole rather than to one section. Nothing renders these two yet — add a
   * consumer (footer, hero) when you want them on the page. They are not the
   * social icons: those live in src/data/socials.js and are rendered by
   * SocialLinks.jsx.
   */
  links: {
    // EDIT ME: the public repository backing this portfolio.
    source: 'https://github.com/sfabianlyl/sfabianlyl-portfolio',
    // EDIT ME: a hosted CV/résumé (PDF or page); remove the key to hide it.
    resume: 'https://example.com/your-name-cv.pdf',
  },
}

export default site
