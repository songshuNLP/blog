---
title: 文章
---

# 📚 全部文章

<script setup>
import { withBase } from 'vitepress'
import { data as posts } from '../.vitepress/posts.data.ts'
</script>

<ul class="post-list">
  <li v-for="post in posts" :key="post.url">
    <a :href="withBase(post.url)">{{ post.title }}</a>
    <span class="post-meta">
      <span v-if="post.date">{{ post.date }}</span>
      <span v-if="post.tags && post.tags.length">&nbsp;·&nbsp;{{ post.tags.join(' / ') }}</span>
    </span>
  </li>
</ul>

> 每篇文章的源文件都在仓库 `docs/posts/` 下，欢迎提 [Issue](https://github.com/songshuNLP/songshunlp.github.io/issues) 交流。
