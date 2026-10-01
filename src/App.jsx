export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Portfolio
          </a>
          <nav className="text-sm text-neutral-400">
            {/* Nav links to be added with the page sections */}
            Coming soon
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Placeholder
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Project shell is ready
        </h1>
        <p className="mt-4 max-w-prose text-neutral-400">
          Config and entry files are scaffolded. Page sections will be added
          here next.
        </p>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Portfolio
        </div>
      </footer>
    </div>
  )
}
