import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/data/site.js'

/*
 * ---------------------------------------------------------------------------
 * site-meta — a tiny, dependency-free inline Vite plugin.
 *
 * It rewrites the document head of index.html on every dev serve and every
 * production build, so the tab title, the SEO description and the theme color
 * have a single source of truth: src/data/site.js.
 *
 *   <html lang>                 <- site.lang
 *   <title>                     <- site.title
 *   <meta name="description">   <- site.description
 *   <meta name="theme-color">   <- site.themeColor
 *
 * Every replacement is anchored on the tag itself, so the attribute order (and
 * a tag wrapped over several lines) does not matter. The literals still written
 * in index.html are only fallbacks — they are what you get if this plugin is
 * removed or the HTML is served without Vite — so edit src/data/site.js and
 * leave index.html alone. A missing tag logs a warning instead of breaking the
 * build, so the site can never be taken down by a head edit.
 *
 * Because src/data/site.js is imported here it becomes a Vite "config
 * dependency": `npm run dev` restarts the dev server when it changes, so the
 * head never goes stale, and `npm run build` always re-reads it. One caveat of
 * plain string replacement: do not put literal HTML tags inside an HTML comment
 * in index.html, or a regex below can match across the comment.
 * ---------------------------------------------------------------------------
 */

// Escapes a data value before it is dropped into HTML text or an attribute.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Replaces the text of <title>…</title>.
function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${escapeHtml(title)}</title>`)
}

// Matches <meta name="…"> however its attributes are ordered or wrapped.
const metaTag = (name) => new RegExp(`<meta\\b[^>]*\\bname=["']${name}["'][^>]*>`, 'i')

// Sets content="…" on <meta name="…">, whatever the attribute order is, and
// adds the attribute when the meta tag exists but has no content yet.
function setMetaContent(html, name, content) {
  const tag = html.match(metaTag(name))?.[0]
  if (!tag) return html

  const attribute = `content="${escapeHtml(content)}"`
  const updated = /\bcontent=/i.test(tag)
    ? tag.replace(/\bcontent=["'][^"']*["']/i, () => attribute)
    : tag.replace(/^<meta\b/i, () => `<meta ${attribute}`)

  return html.replace(tag, () => updated)
}

// Sets lang="…" on the <html> element.
function setHtmlLang(html, lang) {
  return html.replace(/<html\b[^>]*>/i, (tag) =>
    /\blang=/i.test(tag)
      ? tag.replace(/\blang=["'][^"']*["']/i, () => `lang="${escapeHtml(lang)}"`)
      : tag.replace(/^<html\b/i, () => `<html lang="${escapeHtml(lang)}"`),
  )
}

const siteMeta = {
  name: 'portfolio:site-meta',
  transformIndexHtml(html) {
    const updates = [
      {
        label: '<html lang>',
        test: (source) => /<html\b[^>]*>/i.test(source),
        apply: (source) => setHtmlLang(source, site.lang),
      },
      {
        label: '<title>',
        test: (source) => /<title>[\s\S]*?<\/title>/i.test(source),
        apply: (source) => setTitle(source, site.title),
      },
      {
        label: '<meta name="description">',
        test: (source) => metaTag('description').test(source),
        apply: (source) => setMetaContent(source, 'description', site.description),
      },
      {
        label: '<meta name="theme-color">',
        test: (source) => metaTag('theme-color').test(source),
        apply: (source) => setMetaContent(source, 'theme-color', site.themeColor),
      },
    ]

    return updates.reduce((current, { label, test, apply }) => {
      if (!test(current)) {
        this.warn(`${label} is not in index.html, so src/data/site.js cannot fill it in.`)
        return current
      }
      return apply(current)
    }, html)
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMeta],
})
