<script setup>
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data.ts'

const xhsUrl = 'https://www.xiaohongshu.com/user/profile/5351887154'
const blogUrl = 'https://songshunlp.github.io/'

const projects = [
  { icon: '🤖', title: 'Agent 评测平台', tags: ['Agent 评测', '失败归因'], desc: 'Agent 工具调用轨迹评测 + 失败模式自动归因，把大厂 Agent 评测方法论做成可运行平台。', link: 'https://www.songshunlp.com/app' },
  { icon: '🧪', title: '大模型评测平台', tags: ['幻觉率', 'RAG', 'LLM-as-Judge'], desc: '幻觉率检测 / RAG 忠实度 / LLM-as-Judge 多采样 / 配对显著性检验，完整评测链路一键跑通。', link: 'https://www.songshunlp.com/llm_eval' },
  { icon: '🧠', title: 'Agentic RL', tags: ['强化学习', '记忆系统', 'A-MEM'], desc: '训练会自己决定「何时检索 / 何时克制」的记忆 Agent：SFT → 多步 TRACE RL 全流程。', link: 'https://www.songshunlp.com/agentic_rl' },
  { icon: '🗣️', title: 'AI 英语诊断助手', tags: ['AI 应用', '智能诊断'], desc: 'AI 驱动的英语能力智能诊断，即测即出报告，演示 LLM 应用完整落地链路。', link: 'https://www.songshunlp.com/education' },
  { icon: '🎬', title: '小说改编短剧', tags: ['剧本生成'], desc: 'AI 剧本生成与小说改编短剧平台，从文本到分镜的内容生产链路。', link: 'https://www.songshunlp.com/shortvideo' },
  { icon: '📈', title: 'A 股策略实验室', tags: ['数据分析', '策略'], desc: '炒股选股最优化：A 股策略研究与实验平台，策略信号可视化。', link: 'https://www.songshunlp.com/stocks' },
  { icon: '🧭', title: '人生迷茫系统', tags: ['决策'], desc: '大厂程序员职业破局指导，迷茫期的 AI 决策助手。', link: 'https://www.songshunlp.com/confusion' },
  { icon: '📕', title: '小红书卖课管理', tags: ['内容', '管理平台'], desc: '小红书卖课内容管理平台：课程、文案、素材一体化运营。', link: 'https://www.songshunlp.com/maike' },
  { icon: '🥬', title: '农家卖菜文案', tags: ['文案生成'], desc: '农家卖菜小红书文案生成助手，一键出文案的 AI 应用。', link: 'https://www.songshunlp.com/nongjia' },
  { icon: '🐾', title: '宠物健康 AI 解读', tags: ['多模态', 'GLM-4V', 'H5'], desc: '拍照上传宠物照片，GLM-4V 六维健康评估 + 情绪分析 + 性格卡，即拍即出可分享。', link: 'https://www.songshunlp.com/pet_emo' },
  { icon: '🎥', title: 'AI 短剧工坊', tags: ['文生视频', '全流程'], desc: '一句话生成 AI 短剧：写故事、排画面、画人物、做视频、配音、合成，六步全自动出片。', link: 'https://www.songshunlp.com/duanju' },
]

const stats = [
  { num: '100+', label: '真实面试官经验' },
  { num: '10K+', label: '公众号读者' },
  { num: '2 本', label: '大模型专著作者' },
  { num: '8 期', label: '课程迭代打磨' },
]

const creds = ['🎓 中科院博士', '🏢 资深算法工程师', '🎤 100+ 面试官', '📖 2 本专著作者', '📱 公众号 10K+ 读者']

const steps = [
  { title: 'LLM 基础打底', desc: 'Transformer / Attention / 预训练范式 / 主流开源模型家族。1-2 周搞定高频 80% 基础题。' },
  { title: '应用方向分流', desc: 'RAG / Agent / Prompt 工程，按你目标岗位挑 1-2 个深扎。2-3 周完成工业级项目 demo。' },
  { title: '进阶硬骨头', desc: '微调对齐 / 推理优化 / 分布式训练。算法岗核心，准备冲击大厂 / 头部创业公司 offer。' },
  { title: '面试实战', desc: '简历优化 + 真题精讲 + 模拟面试，把「知道」变成「讲得好」，拿下心仪 offer。' },
]
</script>

<template>
  <div class="home">
    <!-- ========== 1. Hero ========== -->
    <section class="home-hero">
      <div class="home-container">
        <div class="home-hero-badges">
          <span class="home-badge">🎁 免费面试资料 · 私信小红书「资料」即领</span>
          <span class="home-badge">✅ 真实项目 · 在线可体验</span>
        </div>
        <h1 class="home-hero-title">兔老板工作室</h1>
        <p class="home-hero-sub">帮你拿到大模型 / AI 方向 offer</p>
        <p class="home-hero-tagline">
          互联网大厂高级算法工程师，著作《图深度学习从理论到实践》《快速部署大模型》。
          大模型 · 图深度学习 · 编程实战，硬核技术博客。
        </p>
        <div class="home-hero-actions">
          <a class="home-btn home-btn-primary" :href="withBase('/posts/')">📚 开始阅读</a>
          <a class="home-btn home-btn-alt" :href="xhsUrl" target="_blank" rel="noopener">📱 关注小红书</a>
        </div>
      </div>
    </section>

    <!-- ========== 2. 真实项目 ========== -->
    <section class="home-section">
      <div class="home-container">
        <h2 class="home-section-title">真实项目 · 在线可体验</h2>
        <p class="home-section-desc">
          课程技术栈全部落到真实项目上，点击即可在线体验。Agent 评测、LLM 评测、强化学习、RAG……
          面试官问的「你做过什么」，这里都有答案。
        </p>
        <div class="home-grid">
          <a v-for="p in projects" :key="p.title" class="home-card home-project" :href="p.link" target="_blank" rel="noopener">
            <div class="home-card-icon">{{ p.icon }}</div>
            <h3>{{ p.title }}</h3>
            <div class="home-tags">
              <span v-for="t in p.tags" :key="t" class="home-tag">{{ t }}</span>
            </div>
            <p>{{ p.desc }}</p>
            <span class="home-card-link">在线体验 →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ========== 4. 最新文章 ========== -->
    <section class="home-section">
      <div class="home-container">
        <h2 class="home-section-title">最新文章</h2>
        <ul class="post-list" v-if="posts.length">
          <li v-for="post in posts" :key="post.url">
            <a :href="withBase(post.url)">{{ post.title }}</a>
            <span class="post-meta">
              <span v-if="post.date">{{ post.date }}</span>
              <span v-if="post.tags && post.tags.length">&nbsp;·&nbsp;{{ post.tags.join(' / ') }}</span>
            </span>
          </li>
        </ul>
        <a class="home-btn home-btn-alt home-more" :href="withBase('/posts/')">📚 全部文章 →</a>
      </div>
    </section>

    <!-- ========== 5. 数据统计 ========== -->
    <section class="home-section">
      <div class="home-container">
        <h2 class="home-section-title">为什么选兔老板</h2>
        <div class="home-stats">
          <div v-for="s in stats" :key="s.label" class="home-stat">
            <div class="home-stat-num">{{ s.num }}</div>
            <div class="home-stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 6. 博主介绍 ========== -->
    <section class="home-section">
      <div class="home-container">
        <h2 class="home-section-title">谁在讲</h2>
        <div class="home-about">
          <p class="home-about-lead">
            既是行业一线资深算法工程师，也是上百次面试官。你的老师就是真正坐在面试桌对面的人。
          </p>
          <p class="home-about-desc">
            中科院博士 · 资深算法工程师。著作《快速部署大模型 LLM 策略实践》《图深度学习从理论到实践》，
            公众号「兔老板工作室」作者，长期为大厂与创业公司招聘做技术面试。
          </p>
          <div class="home-creds">
            <span v-for="c in creds" :key="c" class="home-cred">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 7. 学习路径 ========== -->
    <section class="home-section">
      <div class="home-container">
        <h2 class="home-section-title">学习路径</h2>
        <p class="home-section-desc">按你的目标自由组合，单点突破 or 系统学习都可以。</p>
        <div class="home-steps">
          <div v-for="(s, i) in steps" :key="s.title" class="home-step">
            <div class="home-step-badge">第 {{ i + 1 }} 步</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== Footer CTA ========== -->
    <section class="home-section home-cta">
      <div class="home-container">
        <h2>想聊聊你的转行 / 面试？来小红书找我</h2>
        <p>这个站不卖课、不办会员、不用注册。关心的资料、问题、模拟面试，都可以在小红书免费聊。</p>
        <a class="home-btn home-btn-primary" :href="xhsUrl" target="_blank" rel="noopener">📱 关注小红书 @兔老板工作室</a>
      </div>
    </section>
  </div>
</template>
