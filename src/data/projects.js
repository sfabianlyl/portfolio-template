/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER PROJECT DATA — replace everything below with your real work.
 * ---------------------------------------------------------------------------
 *
 * Each project object supports:
 *   id          {number|string}  Unique key used by React.
 *   title       {string}         Project name shown on the card.
 *   description {string}         One or two sentences about the project.
 *   tags        {string[]}       Technologies used, rendered as pills.
 *   links       {object}         Optional. Any of { demo, source }. Omit the
 *                                object (or a key) to hide those links.
 *
 * The Projects section renders these in a responsive grid, so adding a fourth
 * project is just a matter of adding another object to this array.
 */

const projects = [
  {
    id: 1,
    // PLACEHOLDER 1 ---------------------------------------------------------
    title: 'Placeholder Project One',
    description:
      'Describe what this project does and the problem it solves in one or two sentences. Swap this copy for your own summary.',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    links: {
      demo: 'https://example.com',
      source: 'https://github.com/your-username/your-repository',
    },
  },
  {
    id: 2,
    // PLACEHOLDER 2 ---------------------------------------------------------
    title: 'Placeholder Project Two',
    description:
      'A second placeholder describing a different project. Mention your role, the outcome, or something you learned along the way.',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
    links: {
      source: 'https://github.com/your-username/your-repository',
    },
  },
  {
    id: 3,
    // PLACEHOLDER 3 ---------------------------------------------------------
    title: 'Placeholder Project Three',
    description:
      'A third placeholder with no links on purpose — remove the links object only when a project has nothing public to point at.',
    tags: ['TypeScript', 'Vite', 'Testing Library'],
  },
]

export default projects
