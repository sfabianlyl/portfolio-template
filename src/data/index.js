/*
 * ---------------------------------------------------------------------------
 * THE DATA BARREL — the only import a component needs.
 * ---------------------------------------------------------------------------
 *
 * src/data is the editing surface of the whole site: every string, link and
 * list the page renders comes from these seven small plain-ESM files. Nothing
 * in src/components hardcodes copy, so a non-developer can maintain the site
 * from this folder alone.
 *
 * Import style (used by every component, always the same one):
 *
 *   import { profile, navLinks } from '../data/index.js'
 *
 * Named imports come from the individual files; the default export is a single
 * object holding all of them, handy once in a while (`import data from
 * '../data/index.js'`), but the named form is the one to reach for.
 *
 * Who owns what — edit the value where it is owned and nowhere else:
 *
 *   site.js        Browser tab title, SEO description, <html lang>, theme
 *                 color, footer small print, site-level URLs.
 *   navigation.js  Navbar links and footer links.
 *   profile.js     Name, role, email.
 *   socials.js     The social network links (id, label, href, icon).
 *   content.js     Section eyebrows, headings, paragraphs, calls to action,
 *                 project-link labels.
 *   skills.js      The skill groups and the optional line under them.
 *   projects.js    One object per project card.
 *
 * Adding a new data file? Create it, then add one import, one name to the
 * `export { … }` list and the same name to the default object below — three
 * lines, in alphabetical order.
 */

import { content } from './content.js'
import { navLinks, footerLinks } from './navigation.js'
import { profile } from './profile.js'
import { projects } from './projects.js'
import { site } from './site.js'
import { skillGroups, skillsNote } from './skills.js'
import { socials } from './socials.js'

export {
  site,
  navLinks,
  footerLinks,
  profile,
  socials,
  content,
  skillGroups,
  skillsNote,
  projects,
}

export default {
  site,
  navLinks,
  footerLinks,
  profile,
  socials,
  content,
  skillGroups,
  skillsNote,
  projects,
}
