import { DribbbleIcon, ExternalLinkIcon, GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './Icons.jsx'
import { socials } from '../data/index.js'

/*
 * The social links from src/data/socials.js rendered as icon buttons.
 *
 * The `icon` key of an entry picks the artwork out of the registry below; an
 * unknown or missing key falls back to the generic external-link icon, so a
 * network added to the data file always renders. To give a new network its
 * brand mark, add the component to Icons.jsx and one line here — the data file
 * needs no change at all.
 *
 * Accessibility stays here: the icon is decorative (aria-hidden in Icons.jsx)
 * and the <a> carries the accessible name plus the new-tab hint.
 */
const icons = {
  dribbble: DribbbleIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
}

function resolveIcon(icon) {
  return typeof icon === 'string' && Object.hasOwn(icons, icon) ? icons[icon] : ExternalLinkIcon
}

export default function SocialLinks({ className = 'flex items-center gap-2', iconClassName = 'h-5 w-5' }) {
  return (
    <ul className={className}>
      {socials.map(({ id, label, href, icon }) => {
        const Icon = resolveIcon(icon)
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} profile, opens in a new tab`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
