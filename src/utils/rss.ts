import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import mdxRenderer from '@astrojs/mdx/server.js'
import { render } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

/**
 * Render a blog entry to an HTML string for use in an RSS item.
 *
 * Content entries are Astro components, so they cannot be stringified directly.
 * The container API renders them outside of a page request. MDX entries compile
 * to JSX, so the container needs the MDX server renderer registered.
 */
export async function renderEntryToHtml(entry: CollectionEntry<'blog'>): Promise<string> {
  const container = await AstroContainer.create()
  container.addServerRenderer({ name: mdxRenderer.name, renderer: mdxRenderer })

  const { Content } = await render(entry)
  const html = await container.renderToString(Content)

  return html.trim()
}
