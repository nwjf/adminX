import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import './style/index.scss';
import { registerIcons } from './utils/registerIcons';
import pinia from './store/index';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');

registerIcons(app);
