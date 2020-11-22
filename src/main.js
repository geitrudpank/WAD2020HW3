import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import Header from "./components/Header";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import store from "./ store/store";
import BrowseMain from "./components/BrowseMain";


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/home', name: 'Home', component: Home},
    {path: '/', name: 'Header', component: Header},
    {path: '/login', name: 'Login', component: Login},
    {path: '/browse', name: 'BrowseMain', component: BrowseMain},
    {path: '*', name: '404', component: NotFound},
];
const router = new VueRouter({routes});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
