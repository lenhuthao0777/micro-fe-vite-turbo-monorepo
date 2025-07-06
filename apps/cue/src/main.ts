import { createApp } from 'vue';
import './style.css';
import initRouter from './router';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

const main = createApp(App);

initRouter(main);

main.use(VueQueryPlugin);

main.mount('#app');
