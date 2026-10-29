/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER PROFILE — the handful of identity details reused across the
 * page (navbar, hero, contact, footer) so you only edit them in one place.
 * ---------------------------------------------------------------------------
 *
 * The social links live in their own file, src/data/socials.js; they are
 * imported here, kept on profile.socials for existing consumers, and
 * re-exported by name for anyone who only wants the links.
 */

import { socials } from './socials.js'

export const profile = {
  name: 'Your Name', // Shown in the navbar, hero and footer.
  role: 'Software Developer', // Shown under your name in the hero.
  // EDIT ME: a real, monitored inbox.
  email: 'hello@yourname.dev',
  // EDIT ME: add/remove networks in src/data/socials.js, not here.
  socials,
}

export { socials }

export default profile
