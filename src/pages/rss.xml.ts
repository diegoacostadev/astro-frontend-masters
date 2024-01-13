import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import sanitize from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function get(context: AstroConfig) {
  const blog = await getCollection('blog');
  return rss({
    title: 'The sndwch blog',
    description: 'All sndwch news. All the time',
    site: context.site!,
    items: blog.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/blog/${entry.slug}`,
      content: sanitize(parser.render(entry.body))
    }))
  })
}
