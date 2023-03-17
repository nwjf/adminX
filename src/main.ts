import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import './style/index.scss';
import { registerIcons } from './utils/registerIcons';
// import { Icon } from './utils/registerIcons';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
registerIcons(app);
// app.component('Icon', Icon);
