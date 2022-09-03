import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from '@/router'
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";