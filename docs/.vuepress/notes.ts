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
export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [javascript, node],
})
