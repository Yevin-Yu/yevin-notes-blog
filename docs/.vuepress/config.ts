import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),
  // 网站信息
  base: '/YevinNotesBlog/', // Github Pages
  lang: 'zh-CN',
  title: '耶温笔记',
  description: '耶温笔记-耶温博客-学习记录',
  // 主题配置
  theme: plumeTheme({
    plugins: {
      shiki: {
        languages: ['shell', 'bash', 'typescript', 'javascript', 'html', 'css', 'vue'],
      },
      markdownEnhance: {
        demo: true,
      },
    },
  }),
  // 头部内容
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'keywords',
      href: '耶温笔记,日常记录,前端学习,前端笔记,问题记录,HTML,CSS,JavaScript,Vue,Node.js'
    }],
  ],
})
