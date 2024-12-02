import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home" },
  { text: "博客", link: "/blog/", icon: "material-symbols:notes" },
  {
    text: "Web前端",
    icon: "icon-park-twotone:web-page",
    items: [
      { text: "HTML", link: "/HTML/ckjutl0h/", icon: "ph:file-html-fill" },
      { text: "CSS", link: "/CSS/b3trdf6x/", icon: "fa6-brands:css" },
      { text: "JavaScript", link: "/JavaScript/21qygyp7/", icon: "cib:js" },
      { text: "Vue2", link: "/Vue2/amnf6e15/", icon: "logos:vue" },
      {
        text: "Node.js",
        link: "/Node.js/cznd3edy/",
        icon: "teenyicons:nodejs-solid",
      },
      {
        text: "计算机基础",
        link: "/Computer/r8g2shzj/",
        icon: "material-symbols:computer",
      },
    ],
  },
  {
    text: "插件&工具",
    icon: "fluent:window-dev-tools-16-filled",
    items: [
      { text: "NPM", link: "/NPM/b54c2715/", icon: "gg:npm" },
      { text: "Git", link: "/Git/h8hjd37u/", icon: "mdi:git" },
    ],
  },
]);
