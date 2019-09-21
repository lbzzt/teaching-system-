import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from 'vue-router'
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
import Vueaxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(axios,Vueaxios);



new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
