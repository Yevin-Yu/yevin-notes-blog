import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const javascript = defineNoteConfig({
    dir: 'JavaScript',
    link: '/JavaScript',
    sidebar: [
        {
            text: 'JavaScript Basic',
            icon: 'ic:baseline-dashboard',
            items: ['WebSocket', 'Event Loop']
        }
    ]
})
const node = defineNoteConfig({
    dir: 'Node.js',
    link: '/Node.js',
    sidebar: [
        {
            text: 'Node.js Basic',
            icon: 'ic:baseline-dashboard',
            items: ['Node.js版本管理-n', 'Node.js版本管理-nvm']
        }
    ]
})

const npm = defineNoteConfig({
    dir: 'NPM',
    link: '/NPM',
    sidebar: [
        {
            text: 'NPM Basic',
            icon: 'ic:baseline-dashboard',
            items: ['包管理器基础知识',  'Vue2组件封装与发布指南']
        },
        {
            text: 'NPM Problem Solving',
            icon: 'material-symbols:problem',
            items: ['解决常见依赖安装问题']
        }
    ]
})

const git = defineNoteConfig({
    dir: 'Git',
    link: '/Git',
    sidebar: [
        {
            text: 'Git Basic',
            icon: 'ic:baseline-dashboard',
            items: ['Git基础命令', 'GitCommitMessage规范']
        }
    ]
})

const computer = defineNoteConfig({
    dir: 'Computer',
    link: '/Computer',
    sidebar: [
        {
            text: 'Computer Basic',
            icon: 'ic:baseline-dashboard',
            items: ['HTTPS原理解析', '浏览器是运作原理']
        }
    ]
})

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [javascript, node, npm, git,computer],
})
