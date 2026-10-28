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
 */

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/*
 * The footer only repeats the sections worth jumping back to, plus #home,
 * which is the hero at the very top of the page.
 */
export const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'home', label: 'Back to top' },
]

export default { navLinks, footerLinks }
