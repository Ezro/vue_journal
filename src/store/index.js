import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        catalog_open: false
    },
    getters: {
    },
    mutations: {
        toggle_catalog(state) {
            state.catalog_open = !state.catalog_open
        }
    },
    actions: {
    }
});