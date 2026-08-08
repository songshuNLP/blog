import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  date: string
  tags: string[]
  url: string
  excerpt: string
}

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter((p) => p.url !== '/posts/')
      .sort((a, b) => +new Date(b.frontmatter.date || 0) - +new Date(a.frontmatter.date || 0))
      .map((p) => ({
        title: p.frontmatter.title || p.url,
        date: String(p.frontmatter.date || ''),
        tags: Array.isArray(p.frontmatter.tags) ? p.frontmatter.tags : [],
        url: p.url,
        excerpt: (p.excerpt || '').replace(/^#.*$/, '').trim(),
      }))
  },
})
