import ProjectCard from './ProjectCard.jsx'
import Section from './Section.jsx'
import { content, projects } from '../data/index.js'

/*
 * Responsive grid (1 column on phones, 2 on tablets, 3 on desktop) rendered
 * straight from src/data/projects.js. Featured cards come first, everything
 * else keeps the order it is written in — two filters instead of a sort so the
 * rest of the list stays stable.
 *
 * The heading and the message shown while the array is still empty come from
 * src/data/content.js (content.projects).
 */
const orderedProjects = [
  ...projects.filter((project) => project.featured),
  ...projects.filter((project) => !project.featured),
]

export default function Projects() {
  const { eyebrow, title, empty } = content.projects

  return (
    <Section id="projects" eyebrow={eyebrow} title={title}>
      {orderedProjects.length === 0 ? (
        empty && <p className="text-base text-neutral-400">{empty}</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
