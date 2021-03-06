import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import request,{baseUrl} from './utils/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// Vue.config.productionTip = false

Vue.prototype.$request = request;
Vue.prototype.baseUrl = baseUrl;


new Vue({
  // 4. 把router实例注入到vue实例中
  router,

  // store注入跟实例
  store,
  render: h => h(App),
}).$mount('#app')
