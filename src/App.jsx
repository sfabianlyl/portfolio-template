import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

/*
 * The single page, top to bottom. Each section owns the id its navbar anchor
 * points at: #home, #about, #skills, #projects, #contact.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* First tab stop: lets keyboard users jump straight past the navbar. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-neutral-950"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
