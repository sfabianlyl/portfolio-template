import Section from './Section.jsx'
import { content, skillGroups, skillsNote } from '../data/index.js'

/*
 * Technologies as tag pills, loosely grouped. The heading comes from
 * src/data/content.js (content.skills); the groups and the optional closing
 * line come from src/data/skills.js. Keep the list short and honest — the stack
 * you would happily be interviewed on.
 */
export default function Skills() {
  const { eyebrow, title } = content.skills

  return (
    <Section id="skills" eyebrow={eyebrow} title={title}>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-sm font-semibold text-neutral-200">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Small print under the groups — only rendered when skillsNote has text. */}
      {skillsNote && <p className="mt-10 text-sm text-neutral-400">{skillsNote}</p>}
    </Section>
  )
}
