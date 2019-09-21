import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import base from "./router/base.js";
import test from "./router/test.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component:Login 
    },
    {
      path: "/Login",
      name: "Login",
      component:Login 
    },
    {
      path: "/Home",
      name: "Home",
      component:Home, 
      meta:{requireAuth:true},
      children:[
          ...base,
          ...test 
      ]
    } 
  ]
});
