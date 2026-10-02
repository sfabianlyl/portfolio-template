import { ExternalLinkIcon } from './Icons.jsx'

/*
 * A single project card. Fills the height of its grid cell so the links always
 * sit on the same baseline. `links` is optional — nothing renders without it.
 */
const linkLabels = {
  demo: 'Live site',
  source: 'Source',
}

export default function ProjectCard({ title, description, tags = [], links }) {
  const entries = links
    ? Object.entries(links).filter(([, href]) => Boolean(href))
    : []

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/60">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-neutral-50">{title}</h3>
        <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-400">
          Sample
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-pretty text-neutral-400">{description}</p>

      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {entries.length > 0 && (
        <ul className="mt-auto flex flex-wrap items-center gap-5 pt-6">
          {entries.map(([type, href]) => {
            const label = linkLabels[type] || type
            return (
              <li key={type}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} for ${title}, opens in a new tab`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-accent"
                >
                  {label}
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </article>
  )
}
