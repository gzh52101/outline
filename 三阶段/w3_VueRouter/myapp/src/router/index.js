import Vue from 'vue';

// 1. 引入插件
import VueRouter from 'vue-router';

import Home from '../views/Home.vue'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'


// 2. 安装插件
Vue.use(VueRouter);


// 3. 实例化路由并配置参数
const router = new VueRouter({
  // 配置
    // mode:'hash',
  // 路由规则
  routes:[
      // 重定向
    {path:'/',redirect:'/home'},  
    {
      // 当浏览器地址为/home时，显然Home组件内容
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/mine',
      component:Mine
    },
  ]
})


export default router;