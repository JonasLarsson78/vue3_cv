import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import global css variables
import './root.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
