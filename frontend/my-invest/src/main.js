// main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/global.css'
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols/outlined.css';
import router from './router'


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')