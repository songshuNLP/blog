#!/usr/bin/env node
/**
 * 新建博客文章脚手架
 * 用法：npm run new:post -- "文章标题" [slug]
 * 示例：npm run new:post -- "大模型 RAG 实战" rag-practice
 * 会创建 docs/posts/YYYY-MM-DD-slug.md，并自动追加到 sitemap.xml
 */
import { mkdirSync, writeFileSync, appendFileSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const title = process.argv[2]
const slug = process.argv[3] || `post-${Date.now().toString(36)}`

if (!title) {
  console.error('用法: npm run new:post -- "文章标题" [slug]')
  process.exit(1)
}

const d = new Date()
const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const filename = `${date}-${slug}.md`
const filepath = join(root, 'docs/posts', filename)

const template = `---
title: ${title}
date: ${date}
tags:
  -
---

# ${title}

写正文…
`

mkdirSync(join(root, 'docs/posts'), { recursive: true })
writeFileSync(filepath, template)
console.log('✅ 已创建文章:', filepath)

// 自动追加到 sitemap.xml
const sitemapPath = join(root, 'docs/public/sitemap.xml')
const url = `https://songshunlp.github.io/blog/posts/${filename.replace(/\.md$/, '.html')}`
try {
  let sitemap = readFileSync(sitemapPath, 'utf8')
  if (!sitemap.includes(url)) {
    sitemap = sitemap.replace(
      '</urlset>',
      `  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n</urlset>`
    )
    writeFileSync(sitemapPath, sitemap)
    console.log('✅ 已追加到 sitemap.xml')
  }
} catch {
  console.warn('⚠️ 未找到 sitemap.xml，跳过')
}

console.log('\n下一步：编辑文章 → git push 自动发布 🚀')
