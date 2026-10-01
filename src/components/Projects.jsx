import ProjectCard from './ProjectCard.jsx'
import Section from './Section.jsx'
import projects from '../data/projects.js'

/*
 * Responsive grid (1 column on phones, 2 on tablets, 3 on desktop) rendered
 * straight from src/data/projects.js.
 */
export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="A few things I have built">
      {projects.length === 0 ? (
        <p className="text-base text-neutral-400">
          Nothing to show yet — add your first project to src/data/projects.js.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
