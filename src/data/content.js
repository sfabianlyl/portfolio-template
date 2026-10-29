/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER SECTION COPY — every sentence a section shows, so the whole page
 * can be rewritten from this file without opening a component.
 * ---------------------------------------------------------------------------
 *
 * What lives where (so you never edit the same words twice):
 *   site.js        browser tab title, SEO description, theme color, footer
 *                  small print.
 *   profile.js     name, role, email. The hero <h1>, the navbar wordmark, the
 *                  mailto address and the copyright line all read from there —
 *                  never retype them below.
 *   socials.js     the social hrefs.
 *   navigation.js  the navbar and footer anchor links.
 *   skills.js      the skill groups themselves (this file only holds the
 *                  heading copy for the Skills section).
 *   projects.js    the copy of each individual project card.
 *
 * This file holds the copy around that data: the small eyebrow above each
 * heading, the heading itself, and the paragraphs. The `eyebrow` values match
 * the link labels in navigation.js; the anchor `href`s point at the section ids
 * composed in src/App.jsx (#home, #about, #skills, #projects, #contact).
 *
 * Buttons that are pure interface ("Skip to content", "Open menu") stay in the
 * components that need them — they are accessibility plumbing, not copy.
 */

export const content = {
  hero: {
    // EDIT ME: the small line above your name.
    greeting: 'Hi, my name is',
    // EDIT ME: one or two sentences about what you build and who you build it for.
    tagline:
      'Placeholder tagline — write one or two sentences here about what you build, who you build it for, and what you enjoy most about the work.',
    /*
     * The two calls to action. Set one to null to drop that button from the
     * hero; the other keeps its styling.
     */
    ctas: {
      // EDIT ME: the primary button (it keeps the arrow icon).
      primary: { label: 'View my work', href: '#projects' },
      // EDIT ME: the outlined button next to it.
      secondary: { label: 'Get in touch', href: '#contact' },
    },
  },

  about: {
    eyebrow: 'About',
    // EDIT ME: the heading under the eyebrow.
    title: 'A little bit about me',
    /*
     * EDIT ME: two or three brief paragraphs read best. Add or remove strings
     * in this array — the section renders exactly as many as you give it.
     */
    paragraphs: [
      'Placeholder bio paragraph. Introduce yourself: where you are based, how long you have been building software, and the kind of teams or products you do your best work in.',
      'Second placeholder paragraph. Mention what you are currently focused on, a problem you like solving, and something a reader outside of tech would still find interesting.',
      'Third placeholder paragraph — optional. Talk about what comes next, such as the kind of role you are looking for or the skills you are sharpening this year.',
    ],
  },

  skills: {
    eyebrow: 'Skills',
    // EDIT ME: the heading; the groups themselves are in skills.js.
    title: 'Tools I reach for',
  },

  projects: {
    eyebrow: 'Projects',
    // EDIT ME: the heading; the cards themselves are in projects.js.
    title: 'A few things I have built',
    // EDIT ME: shown only while the projects array in projects.js is empty.
    empty: 'Nothing to show yet — add your first project to src/data/projects.js.',
    /*
     * The labels ProjectCard.jsx puts on each entry of a project's `links`
     * object. A key that is not listed here is shown as the key itself, so
     * adding `{ caseStudy: 'https://…' }` to a project needs no code change —
     * add a line here when you want a nicer label for it.
     */
    linkLabels: {
      demo: 'Live site',
      source: 'Source',
    },
  },

  contact: {
    eyebrow: 'Contact',
    // EDIT ME: the heading.
    title: "Let's build something together",
    // EDIT ME: why people should write to you.
    body: 'Placeholder invitation. Tell people why they should reach out — a role you are open to, a freelance service, or simply a conversation about an idea they have.',
    // EDIT ME: the line beside the social icons; null hides it.
    socialLabel: 'or find me here',
  },
}

export default content
