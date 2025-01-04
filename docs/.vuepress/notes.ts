import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";
const html = defineNoteConfig({
  dir: "HTML",
  link: "/HTML",
  sidebar: [
    {
      text: "HTML Basic",
      icon: "ic:baseline-dashboard",
      items: [
        "HTML-Attribute",
        "HTML-Elements",
        "HTML-Events",
        "HTML-Input",
        "HTML5新增",
      ],
    },
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
        "CSS-Flex布局",
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
      items: [
        "JavaScript-基础",
        "JavaScript-作用域和闭包",
        "JavaScript-原型链",
        "JavaScript-Promise",
        "JavaScript-类（Class）",
        "JavaScript-内置对象方法",
        "JavaScript-ECMAScript",
        "JavaScript-正则表达式",
        "JavaScript-Set、Map、WeakSet和WeakMap",
        "Event Loop",
        "ESM与CommonJS",
      ],
    },
    {
      text: "Web API",
      icon: "icon-park:web-page",
      items: [
        "Web API-Cache",
        "Web API-Service Worker",
        "Web API-Web Messaging",
        "Web API-Web Socket",
        "Web API-Web Worker",
      ],
    },
    {
      text: "JavaScript Case",
      icon: "mdi:jewel-case",
      items: [
        "JavaScript-常用方法",
        "JavaScript-浏览器离线储存",
        "PWA-渐进式应用",
      ],
    },
  ],
});

const typescript = defineNoteConfig({
  dir: "TypeScript",
  link: "/TypeScript/",
  sidebar: [
    {
      text: "TypeScript基础",
      icon: "ic:baseline-dashboard",
      items: [
        "TypeScript-简介安装",
        "TypeScript-类型相关",
        "TypeScript-关键字与运算符",
        "TypeScript-基础数据类型",
        "TypeScript-特有数据类型",
        "TypeScript-any与unknown",
        "TypeScript-never与void",
        "TypeScript-数组与元组",
        "TypeScript-函数",
        "TypeScript-对象",
        "TypeScript-接口（Interface）",
        "TypeScript-类（Class）",
        "TypeScript-泛型",
        "TypeScript-模块",
        "TypeScript-namespace",
        "TypeScript-装饰器",
        "TypeScript-d.ts类型声明文件",
        "TypeScript-配置相关",
      ],
    },
    {
      text: "TypeScript方案",
      icon: "mdi:jewel-case",
      items: ["TypeScript-常用复用方案"],
    },
  ],
});

const vue2 = defineNoteConfig({
  dir: "Vue2",
  link: "/Vue2",
  sidebar: [
    {
      text: "Vue2 Base",
      icon: "ic:baseline-dashboard",
      items: ["Vue2&Vue3项目创建", "Vue2数据响应原理解析"],
    },
    {
      text: "Vue2 Case",
      icon: "mdi:jewel-case",
      items: ["事件总线使用", "组件自我调用"],
    },
  ],
});

const vue3 = defineNoteConfig({
  dir: "Vue3",
  link: "/Vue3",
  sidebar: [
    {
      text: "Vue3 Base",
      icon: "ic:baseline-dashboard",
      items: [
        "Vue3-简介概述",
        "Vue3-setup",
        "Vue3-ref&reactive",
        "Vue3-computed&watch",
        "Vue3-ref&props",
        "Vue3-生命周期",
        "Vue3-自定义hook",
        "Vue3-router",
        "Vue3-Pinia",
        "Vue3-组件通信",
        "Vue3-Slot插槽",
        "Vue3-其他API",
      ],
    },
    {
      text: "Vue3 Case",
      icon: "mdi:jewel-case",
      items: ["Vite&Vue3项目创建", "Vue3开启PWA"],
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
  notes: [
    html,
    css,
    javascript,
    typescript,
    vue2,
    vue3,
    node,
    npm,
    git,
    computer,
  ],
});
