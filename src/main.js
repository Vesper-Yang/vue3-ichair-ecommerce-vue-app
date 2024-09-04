import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 共享购物车，这样就可以在所有页面、组件中访问
app.provide('cart', [])

app.use(router)

app.mount('#app')
