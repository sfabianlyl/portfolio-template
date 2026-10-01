import Section from './Section.jsx'

/*
 * Technologies as tag pills, loosely grouped. Keep the list short and honest —
 * the stack you would happily be interviewed on. EDIT ME.
 */
const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vitest'],
  },
  {
    id: 'tools',
    label: 'Tools & Platform',
    skills: ['Git', 'GitHub Actions', 'Docker', 'PostgreSQL', 'Figma'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for">
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

      <p className="mt-10 text-sm text-neutral-500">
        Placeholder skills list — replace the groups above with your own stack.
      </p>
    </Section>
  )
}
