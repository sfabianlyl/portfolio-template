import { MailIcon } from './Icons.jsx'
import Section from './Section.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../data/profile.js'

/*
 * The "say hello" section. No form on purpose — a mailto link keeps the page
 * static. EDIT ME: the email lives in src/data/profile.js.
 */
export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="max-w-prose">
        <p className="text-base leading-relaxed text-pretty text-neutral-400">
          Placeholder invitation. Tell people why they should reach out — a role you are open to,
          a freelance service, or simply a conversation about an idea they have.
        </p>

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
            <span className="text-sm text-neutral-400">or find me here</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
