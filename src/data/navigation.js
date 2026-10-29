/*
 * ---------------------------------------------------------------------------
 * NAVIGATION — every same-page anchor link rendered by Navbar.jsx and
 * Footer.jsx, so adding, removing or renaming a section is a one-file change.
 * ---------------------------------------------------------------------------
 *
 * Each link object supports:
 *   id     {string}  The section id the anchor points at (`href="#{id}"`),
 *                    matching the id passed to <Section> in src/App.jsx.
 *   label  {string}  The visible link text.
 *
 * Order matters: the links render top to bottom (navbar) and left to right
 * (footer) exactly as written here.
 *
 * External links (GitHub, a CV) are not here — socials.js owns the social
 * icons and site.js owns the remaining site-level URLs.
 */

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/*
 * The footer only repeats the sections worth jumping back to, so it borrows
 * those link objects from navLinks instead of restating their labels: rename
 * 'Projects' above and both bars change together. `navLink()` returns undefined
 * for an id that is no longer in the navbar and the filter drops that footer
 * entry, so nothing can render a half-empty link.
 *
 * A footer-only link is just a literal object — 'Back to top' points at #home,
 * the hero at the very top of the page, which the navbar does not list.
 */
const navLink = (id) => navLinks.find((link) => link.id === id)

export const footerLinks = [
  navLink('about'),
  navLink('projects'),
  { id: 'home', label: 'Back to top' },
].filter(Boolean)

export default { navLinks, footerLinks }
