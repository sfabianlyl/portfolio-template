import { ExternalLinkIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx'
import profile from '../data/profile.js'

/*
 * The social links from src/data/profile.js rendered as icon buttons.
 * Add a new entry to that file (and an icon here) to extend it everywhere.
 */
const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export default function SocialLinks({ className = 'flex items-center gap-2', iconClassName = 'h-5 w-5' }) {
  return (
    <ul className={className}>
      {profile.socials.map(({ id, label, href }) => {
        const Icon = icons[id] || ExternalLinkIcon
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
