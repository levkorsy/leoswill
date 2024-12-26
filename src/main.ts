import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import FontAwesomeIcon from '@/plugins/font-awesome.ts';

const app = createApp(App);

app.use(i18n); // TODO save to local storage
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
