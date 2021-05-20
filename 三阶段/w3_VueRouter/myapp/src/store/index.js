import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import cart from './modules/cart'
import common from './modules/common'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 全局
    state:{
        a:10,
    },
    getters:{
        sum(state){
            return state.a*state.a;
        }
    },
    mutations:{
        add(state){
            state.a++;
        }
    },
    actions:{},

    // 模块化store
    modules:{
        cart,
        user,
        common
    }
});


export default store;