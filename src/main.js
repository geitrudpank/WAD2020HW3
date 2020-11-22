import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import Login from "./components/Login";
import store from "./ store/store";
import BrowseMain from "./components/BrowseMain";


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {path: '/browse', name: 'BrowseMain', component: BrowseMain},
];
const router = new VueRouter({routes});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
