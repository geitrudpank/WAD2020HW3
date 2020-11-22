import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://private-517bb-wad20postit.apiary-mock.com/posts";

export default new Vuex.Store({
    state: {
        posts : []
    },
    actions: {
        loadPosts({commit}) {
            Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts').then(result => {
                commit('SAVE_POSTS', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        }
    },
    mutations: {
        SAVE_POSTS(state, posts) {
            state.posts = posts;
        }
    }
})