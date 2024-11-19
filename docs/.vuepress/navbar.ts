import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:notes' },
  {
    text: 'Web前端', icon: "material-symbols:web", items: [
      { text: 'JavaScript', link: '/JavaScript/21qygyp7/', icon: "cib:js" },
    ]
  },
])
