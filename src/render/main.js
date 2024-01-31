import { createApp } from 'vue'
import router from "@render/router/index"
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
