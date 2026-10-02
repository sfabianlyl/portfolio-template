import profile from '../data/profile.js'

const year = new Date().getFullYear()

/*
 * Quiet closing bar: name, a couple of anchor links, and back to the top.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {profile.name}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-6">
          <a href="#about" className="transition-colors hover:text-neutral-200">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-neutral-200">
            Projects
          </a>
          <a href="#home" className="transition-colors hover:text-neutral-200">
            Back to top
          </a>
        </nav>

        <p>Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
