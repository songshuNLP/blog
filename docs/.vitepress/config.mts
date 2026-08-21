import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '兔老板工作室 博客',
  description: '大模型、图深度学习、编程实战的硬核技术博客（作者：互联网大厂高级算法工程师）',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { property: 'og:title', content: '兔老板工作室 博客' }],
    ['meta', { property: 'og:description', content: '大模型、图深度学习、编程实战的硬核技术博客' }],
    ['meta', { property: 'og:image', content: 'https://songshunlp.github.io/logo.jpg' }],
    ['meta', { property: 'og:url', content: 'https://songshunlp.github.io/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '兔老板工作室 博客' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://songshunlp.github.io/logo.jpg' }],
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
    footer: {
      message: '基于 VitePress · 内容采用 CC BY 4.0 许可',
      copyright: '© 2026 兔老板工作室 · 公众号「松鼠NLP」· songshunlp.com',
    },
  },
})
