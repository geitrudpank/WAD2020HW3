import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://private-517bb-wad20postit.apiary-mock.com/posts";

export default new Vuex.Store({
    state: {
        posts : [],
        user: [],
        users: []
    },
    actions: {
        loadPosts({commit}) {
            Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts').then(result => {
                commit('SAVE_POSTS', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        loadUser({commit}) {
            Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1').then(result => {
                commit('SAVE_USER', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        loadUsers({commit}) {
            Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles').then(result => {
                commit('SAVE_USERS', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        }

    },
    mutations: {
        SAVE_POSTS(state, posts) {
            state.posts = posts;
        },
        SAVE_USER(state, user) {
            state.user = user;
        },
        SAVE_USERS(state, users) {
            state.users = users;
        }
    }
})