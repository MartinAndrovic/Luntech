import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';


axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true; // 🔥 This is required
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app');
