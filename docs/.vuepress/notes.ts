import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";
const html = defineNoteConfig({
  dir: "HTML",
  link: "/HTML",
  sidebar: [
    {
      text: "HTML Case",
      icon: "mdi:jewel-case",
      items: ["H5-响应式布局方案", "Canvas-图片合成"],
    },
  ],
});

const css = defineNoteConfig({
  dir: "CSS",
  link: "/CSS",
  sidebar: [
    {
      text: "CSS Basic",
      icon: "ic:baseline-dashboard",
      items: [
        "CSS选择器",
        "CSS3新增",
        "CSS网格布局",
        "CSS样式滤镜",
        "CSS滚动条",
        "CSS自定义变量",
      ],
    },
    {
      text: "CSS Case",
      icon: "mdi:jewel-case",
      items: ["CSS文字轮播效果", "CSS主题切换方案", "CSS响应式常见布局"],
    },
  ],
});

const javascript = defineNoteConfig({
  dir: "JavaScript",
  link: "/JavaScript",
  sidebar: [
    {
      text: "JavaScript Basic",
      icon: "ic:baseline-dashboard",
      items: ["WebSocket", "Event Loop", "ESM与CommonJS"],
    },
  ],
});

const vue2 = defineNoteConfig({
  dir: "Vue2",
  link: "/Vue2",
  sidebar: [
    {
      text: "Vue2 Case",
      icon: "mdi:jewel-case",
      items: ["事件总线使用", "组件自我调用"],
    },
  ],
});

const node = defineNoteConfig({
  dir: "Node.js",
  link: "/Node.js",
  sidebar: [
    {
      text: "Node.js Basic",
      icon: "ic:baseline-dashboard",
      items: ["Node.js版本管理-n", "Node.js版本管理-nvm"],
    },
    {
      text: "Node.js Case",
      icon: "mdi:jewel-case",
      items: ["Node.js+Express基本案例", "Node.js+Express保持登陆"],
    },
  ],
});

const npm = defineNoteConfig({
  dir: "NPM",
  link: "/NPM",
  sidebar: [
    {
      text: "NPM Basic",
      icon: "ic:baseline-dashboard",
      items: ["包管理器基础知识", "Vue2组件封装与发布指南"],
    },
    {
      text: "NPM Problem Solving",
      icon: "material-symbols:problem",
      items: ["解决常见依赖安装问题"],
    },
  ],
});

const git = defineNoteConfig({
  dir: "Git",
  link: "/Git",
  sidebar: [
    {
      text: "Git Basic",
      icon: "ic:baseline-dashboard",
      items: ["Git基础命令", "GitCommitMessage规范"],
    },
  ],
});

const computer = defineNoteConfig({
  dir: "Computer",
  link: "/Computer",
  sidebar: [
    {
      text: "Computer Basic",
      icon: "ic:baseline-dashboard",
      items: ["HTTPS原理解析", "浏览器是运作原理"],
    },
  ],
});

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [html, css, javascript, vue2, node, npm, git, computer],
});
