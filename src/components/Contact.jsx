import { MailIcon } from './Icons.jsx'
import Section from './Section.jsx'
import SocialLinks from './SocialLinks.jsx'
import { content, profile } from '../data/index.js'

/*
 * The "say hello" section. No form on purpose — a mailto link keeps the page
 * static. The heading, the invitation and the line beside the icons come from
 * src/data/content.js (content.contact), the email from src/data/profile.js and
 * the icons from src/data/socials.js.
 */
export default function Contact() {
  const { eyebrow, title, body, socialLabel } = content.contact

  return (
    <Section id="contact" eyebrow={eyebrow} title={title}>
      <div className="max-w-prose">
        <p className="text-base leading-relaxed text-pretty text-neutral-400">{body}</p>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="flex items-center gap-3">
            <SocialLinks />
            {/* Hidden with null in src/data/content.js if you do not want it. */}
            {socialLabel && <span className="text-sm text-neutral-400">{socialLabel}</span>}
          </div>
        </div>
      </div>
    </Section>
  )
}
