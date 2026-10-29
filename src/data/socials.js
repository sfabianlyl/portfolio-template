/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER SOCIAL LINKS — every network icon button rendered by
 * SocialLinks.jsx (hero + contact), so adding a network is a one-line change
 * here instead of an edit in two components.
 * ---------------------------------------------------------------------------
 *
 * This file is the single source for social hrefs. SocialLinks.jsx reads it
 * through the barrel (`import { socials } from '../data/index.js'`), and so
 * should anything else that wants the links — profile.js only holds the name,
 * role and email now.
 *
 * Each social object supports:
 *   id     {string}  Unique key used by React; keep it lowercase and stable.
 *   label  {string}  Network name, e.g. 'GitHub'. Becomes part of the
 *                    accessible name of the link: "GitHub profile, opens in a
 *                    new tab". It is never shown as visible text.
 *   href   {string}  Absolute URL of your profile. Opened in a new tab with
 *                    rel="noreferrer".
 *   icon   {string}  Optional key of the icon in the registry inside
 *                    SocialLinks.jsx. Supported today: 'dribbble', 'github',
 *                    'instagram', 'linkedin', 'x'. Anything else (or leaving
 *                    the key out) falls back to the generic external-link
 *                    icon, so a brand-new network still renders fine before
 *                    you add artwork for it.
 *
 * Order matters: the buttons render left to right exactly as written here.
 */

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    // EDIT ME: your GitHub profile.
    href: 'https://github.com/your-username',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    // EDIT ME: your LinkedIn profile.
    href: 'https://www.linkedin.com/in/your-username',
    icon: 'linkedin',
  },
  /*
   * ADDING A NETWORK -------------------------------------------------------
   * Uncomment an entry below and EDIT ME the href — that is the whole change.
   * The icon key must exist in the registry in src/components/SocialLinks.jsx
   * ('x', 'dribbble' and 'instagram' already do); an unknown key simply gets
   * the external-link icon. To support a network with no icon yet, add one to
   * src/components/Icons.jsx and a `key: KeyIcon` line to that registry.
   *
   * {
   *   id: 'x',
   *   label: 'X',
   *   // EDIT ME: your X (Twitter) profile.
   *   href: 'https://x.com/your-username',
   *   icon: 'x',
   * },
   * {
   *   id: 'dribbble',
   *   label: 'Dribbble',
   *   // EDIT ME: your Dribbble profile.
   *   href: 'https://dribbble.com/your-username',
   *   icon: 'dribbble',
   * },
   * {
   *   id: 'instagram',
   *   label: 'Instagram',
   *   // EDIT ME: your Instagram profile.
   *   href: 'https://www.instagram.com/your-username',
   *   icon: 'instagram',
   * },
   */
]

export default socials
