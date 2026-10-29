/*
 * ---------------------------------------------------------------------------
 * PLACEHOLDER PROJECT DATA — replace everything below with your real work.
 * ---------------------------------------------------------------------------
 *
 * Every string a project card shows lives here — the card itself hardcodes
 * nothing, so you never have to open src/components to fill it in.
 *
 * Each project object supports:
 *   id          {number|string}  Unique key used by React.
 *   title       {string}         Project name, the <h3> of the card.
 *   description {string}         One or two sentences about the project.
 *   tags        {string[]}       Technologies used, rendered as pills.
 *   badge       {string|null}    Optional short uppercase label in the top-right
 *                                corner of the card, e.g. 'Sample'. Null (or
 *                                leaving the key out) renders nothing.
 *   year        {number|string}  Optional year you shipped it, e.g. 2025.
 *                                Omit to hide it.
 *   role        {string}         Optional one-liner about your part, e.g.
 *                                'Full stack'. Omit to hide it. Shown beside
 *                                the year, just under the title.
 *   featured    {boolean}        Optional. true hoists the card to the front of
 *                                the grid; the rest keep the order written
 *                                here. Defaults to false.
 *   links       {object}         Optional. Any of { demo, source } — labelled
 *                                'Live site' and 'Source'. Omit the object (or
 *                                a key) to hide those links. Any other key is
 *                                still rendered using the key itself as the
 *                                label, so { caseStudy: '...' } works too.
 *
 * The Projects section renders these in a responsive grid, so adding a fourth
 * project is just a matter of adding another object to this array.
 */

export const projects = [
  {
    id: 1,
    // PLACEHOLDER 1 ---------------------------------------------------------
    title: 'Placeholder Project One',
    description:
      'Describe what this project does and the problem it solves in one or two sentences. Swap this copy for your own summary.',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    // EDIT ME: 'Sample' keeps the placeholder label — use null for real work.
    badge: 'Sample',
    // EDIT ME: the year you shipped it.
    year: 2025,
    // EDIT ME: your part in one line, e.g. 'Full stack' or 'Frontend'.
    role: 'Full stack',
    // EDIT ME: true pulls this card to the front of the grid.
    featured: true,
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
    // EDIT ME: keep the label or set null to drop it from the card.
    badge: 'Sample',
    // EDIT ME: the year you shipped it.
    year: 2024,
    // EDIT ME: your part in one line.
    role: 'Backend',
    // EDIT ME: only one or two cards need to be featured.
    featured: false,
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
    // EDIT ME: null renders no badge — this card shows how it drops away.
    badge: null,
    // EDIT ME: year and role are optional keys; leave them out to hide them.
    // EDIT ME: false keeps the card in its written position in the grid.
    featured: false,
  },
]

export default projects
