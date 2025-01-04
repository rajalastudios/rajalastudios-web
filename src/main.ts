import { createApp } from 'vue'
import {createI18n} from "vue-i18n";
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import './style.css'

import en_US from "./locales/en-us.json";
import de_DE from "./locales/de-de.json";

type MessageSchema = typeof en_US;

const i18n = createI18n<[MessageSchema], 'en-US' | 'de-DE'>({
    legacy: false,
    locale: 'en-US',
    messages: {
        'en-US': en_US,
        "de-DE": de_DE,
    }
})

import Main from "./components/Main.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: '/', component: Main },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(i18n).use(router).mount('#app')
