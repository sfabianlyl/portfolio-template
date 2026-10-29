import ProjectCard from './ProjectCard.jsx'
import Section from './Section.jsx'
import { projects } from '../data/projects.js'

/*
 * Responsive grid (1 column on phones, 2 on tablets, 3 on desktop) rendered
 * straight from src/data/projects.js. Featured cards come first, everything
 * else keeps the order it is written in — two filters instead of a sort so the
 * rest of the list stays stable.
 */
const orderedProjects = [
  ...projects.filter((project) => project.featured),
  ...projects.filter((project) => !project.featured),
]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="A few things I have built">
      {orderedProjects.length === 0 ? (
        <p className="text-base text-neutral-400">
          Nothing to show yet — add your first project to src/data/projects.js.
        </p>
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
