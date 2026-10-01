import { ArrowRightIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../data/profile.js'

/*
 * The first thing visitors see: name, role, one-line pitch, one primary call
 * to action, plus the GitHub / LinkedIn links.
 * EDIT ME: swap the tagline for your own one or two sentences.
 */
export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto flex min-h-[75vh] w-full max-w-5xl flex-col justify-center px-6 py-24 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Hi, my name is
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-neutral-50 sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl text-neutral-300 sm:text-2xl">{profile.role}</p>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
          Placeholder tagline — write one or two sentences here about what you build, who you
          build it for, and what you enjoy most about the work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
