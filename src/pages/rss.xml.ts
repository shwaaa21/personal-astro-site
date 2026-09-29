import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import themeConfig from '@theme-config'
import { renderEntryToHtml } from '@utils/rss'

export async function GET(context: APIContext): Promise<Response> {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  )

  return rss({
    title: themeConfig.seo.title ?? 'jquest.dev',
    description: themeConfig.seo.description ?? '',
    site: context.site ?? 'https://jquest.dev',
    items: await Promise.all(
      posts.map(async (post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}`,
        content: await renderEntryToHtml(post),
        categories: post.data.tags,
      }))
    ),
    customData: '<language>en-GB</language>',
  })
}
