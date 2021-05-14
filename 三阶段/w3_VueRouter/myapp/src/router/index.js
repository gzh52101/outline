import Vue from 'vue';

// 1. 引入插件
import VueRouter from 'vue-router';

import Home from '../views/Home.vue'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'
import Discover from '../views/Discover.vue'
import Cart from '../views/Cart.vue'
import Goods from '../views/Goods.vue'


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
      name:'home', // 命名路由：给路由起个名字，可以通过路由名称进行跳转
      path:'/home',
      component:Home
    },
    {
      path:'/discover',
      component:Discover
    },
    {
      path:'/cart',
      component:Cart
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

    // 动态路由：路径可变的路由
    {
        path:'/goods/:id',
        name:'goods',
        // 定义路由时传参
        // props:{a:10,b:20}, // 等效于: <Goods :a='10' :b='20' /> 或 <Goods v-bind="{a:10,b:20}"/>
        // props:function(route){
        //     // route: 当前路由信息（与实例中的$route一致）
        //     return route.params
        // },
        props:true, // 如果 props 被设置为 true，内部会自动把route.params设置为组件属性
        component:Goods
      },
  ]
})


export default router;