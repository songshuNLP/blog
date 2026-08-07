import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '松鼠NLP 博客',
  description: '大模型、图深度学习、编程实战的硬核技术博客（作者：互联网大厂高级算法工程师）',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/blog/logo.jpg' }],
    ['meta', { property: 'og:title', content: '松鼠NLP 博客' }],
    ['meta', { property: 'og:description', content: '大模型、图深度学习、编程实战的硬核技术博客' }],
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: 'GitHub', link: 'https://github.com/songshuNLP' },
    ],
    sidebar: [
      {
        text: '文章',
        items: [{ text: '开篇', link: '/posts/hello-world' }],
      },
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/songshuNLP' }],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    lastUpdatedText: '更新于',
  },
})
