import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router/index'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
