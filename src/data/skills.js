/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER SKILLS — the grouped tag pills in the Skills section.
 * ---------------------------------------------------------------------------
 *
 * Only the pills live here; the eyebrow and heading of the section are section
 * copy and live in src/data/content.js (content.skills).
 *
 * Each group object supports:
 *   id      {string}    Unique key used by React; keep it stable.
 *   label   {string}    The heading above the group of pills.
 *   skills  {string[]}  The pills themselves, in the order you want them shown.
 *
 * The grid is responsive — 1 column on phones, 2 on tablets, 3 on desktop — so
 * three groups read well, but any number works. Keep the list short and
 * honest: the stack you would happily be interviewed on.
 */

export const skillGroups = [
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

/*
 * EDIT ME: one optional line of small print under the groups. Set it to null
 * (or delete the line) and the paragraph is not rendered at all — the section
 * ends with the last group.
 */
export const skillsNote = 'Placeholder skills list — replace the groups above with your own stack.'

export default { skillGroups, skillsNote }
