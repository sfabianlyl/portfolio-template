import Section from './Section.jsx'
import { content } from '../data/index.js'

/*
 * A short bio. The eyebrow, the heading and every paragraph come from
 * src/data/content.js (content.about) — add or remove strings in
 * content.about.paragraphs and this renders exactly as many as you give it.
 */
export default function About() {
  const { eyebrow, title, paragraphs } = content.about

  return (
    <Section id="about" eyebrow={eyebrow} title={title}>
      <div className="max-w-prose space-y-5 text-base leading-relaxed text-pretty text-neutral-400">
        {paragraphs.map((paragraph, index) => (
          <p key={`about-${index}`}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
