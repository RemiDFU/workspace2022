import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
//import Vuex from 'vuex'
import { store } from './store/store'

const app = createApp(App)

app.config.productionTip = false
// app.use(Vuex)
app.use(store)
import router from '@/router'
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";