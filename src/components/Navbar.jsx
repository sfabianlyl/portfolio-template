import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons.jsx'
import { navLinks, profile } from '../data/index.js'

/*
 * Sticky top bar: your name on the left, anchor links on the right.
 * The name comes from src/data/profile.js and the links from
 * src/data/navigation.js; both point at the section ids composed in src/App.jsx
 * (#home, #about, #skills, #projects, #contact).
 * Scrolling to them is handled in CSS (scroll-behavior + scroll-padding-top in
 * src/index.css) so the sticky bar never covers a heading, and smooth
 * scrolling is disabled for visitors who prefer reduced motion.
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Let Escape dismiss the mobile menu, the way a keyboard user expects.
  useEffect(() => {
    if (!isOpen) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-tight text-neutral-50">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-white/5 hover:text-neutral-50 md:hidden"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-white/10 md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm text-neutral-300 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
