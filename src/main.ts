import './assets/main.css'

import { createApp } from 'vue'

import App from "./App.vue";
import {createPinia} from "pinia";
import "./main.css"
import {router} from "@/router/router";
const pinia = createPinia()


createApp(App).use(pinia).use(router).mount('#app')
// @ts-ignore
window.pinia = pinia