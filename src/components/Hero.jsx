import { ArrowRightIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'
import { content, profile } from '../data/index.js'

/*
 * The first thing visitors see: name, role, one-line pitch, one primary call
 * to action, plus the social links.
 *
 * Nothing here is copy: the greeting, the tagline and both buttons come from
 * src/data/content.js (content.hero), the name and role from
 * src/data/profile.js, and the icons from src/data/socials.js. Set either
 * CTA in content.js to null and its button is not rendered.
 */
export default function Hero() {
  const { greeting, tagline, ctas } = content.hero

  return (
    <section id="home" aria-labelledby="home-title" className="scroll-mt-20">
      <div className="mx-auto flex min-h-[75vh] w-full max-w-5xl flex-col justify-center px-6 py-24 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{greeting}</p>

        <h1
          id="home-title"
          className="mt-4 text-4xl font-bold tracking-tight text-balance text-neutral-50 sm:text-6xl"
        >
          {profile.name}
        </h1>

        <p className="mt-4 text-xl text-neutral-300 sm:text-2xl">{profile.role}</p>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
          {tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {ctas.primary && (
            <a
              href={ctas.primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
            >
              {ctas.primary.label}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          )}

          {ctas.secondary && (
            <a
              href={ctas.secondary.href}
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-accent hover:text-accent"
            >
              {ctas.secondary.label}
            </a>
          )}
        </div>

        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
