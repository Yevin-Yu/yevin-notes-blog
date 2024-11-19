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
export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [javascript],
})
