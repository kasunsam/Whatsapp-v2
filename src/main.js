import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';

import vue3GoogleLogin from 'vue3-google-login';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    '142142081212-hnc3426k9uv1qtcvg539bg9qds1mjia6.apps.googleusercontent.com',
});

app.mount('#app');
