import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Browse from "./components/Browse";
import Header from "./components/Header";
import Login from "./components/Login";
import NotFound from "./components/NotFound";


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', name: 'Header', component: Header},
  {path: '/login', name: 'Login', component: Login},
  {path: '/browse', name: 'Browse', component: Browse},
  {path: '*', name: '404', component: NotFound}
];
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
