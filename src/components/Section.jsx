/*
 * Shared section shell: one id for the nav anchors, one max width, one set of
 * vertical paddings and one heading style — so every section lines up.
 * The <section> is labelled by its own <h2>, so screen readers announce which
 * landmark the user landed in after an anchor jump.
 */
export default function Section({ id, eyebrow, title, children, className = '' }) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-20 border-t border-white/10 ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-3 text-2xl font-semibold tracking-tight text-balance text-neutral-50 sm:text-3xl"
          >
            {title}
          </h2>
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
