import { createApp } from 'vue'
const pinia = createPinia();
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedState);
import "primevue/resources/themes/fluent-light/theme.css";
import "primevue/resources/primevue.min.css";
import './assets/main.scss'


import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import {clickOutside} from "@/plugins/clickOutside";
import { i18n } from '@/plugins/vue-i18n';
import {readIni} from "@/plugins/loadIni";
import {createPinia} from "pinia";
readIni();

const app = createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .directive('click-outside', clickOutside);
app.mount('#app')
