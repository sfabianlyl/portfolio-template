import Section from './Section.jsx'

/*
 * A short bio. Two or three brief paragraphs read best — EDIT ME.
 */
export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little bit about me">
      <div className="max-w-prose space-y-5 text-base leading-relaxed text-pretty text-neutral-400">
        <p>
          Placeholder bio paragraph. Introduce yourself: where you are based, how long you have
          been building software, and the kind of teams or products you do your best work in.
        </p>
        <p>
          Second placeholder paragraph. Mention what you are currently focused on, a problem you
          like solving, and something a reader outside of tech would still find interesting.
        </p>
        <p>
          Third placeholder paragraph — optional. Talk about what comes next, such as the kind of
          role you are looking for or the skills you are sharpening this year.
        </p>
      </div>
    </Section>
  )
}
