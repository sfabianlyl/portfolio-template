import { footerLinks, profile, site } from '../data/index.js'

const year = new Date().getFullYear()

/*
 * Quiet closing bar: name, the anchor links from src/data/navigation.js, and
 * back to the top. The copyright name comes from src/data/profile.js and the
 * "Built with …" line from src/data/site.js.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {profile.name}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-neutral-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p>{site.builtWith}</p>
      </div>
    </footer>
  )
}
