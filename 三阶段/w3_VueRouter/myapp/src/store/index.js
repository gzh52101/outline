import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import cart from './modules/cart'
import common from './modules/common'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 模块化store
    modules:{
        cart,
        user,
        common
    }
});

console.log('store=',store);

export default store;