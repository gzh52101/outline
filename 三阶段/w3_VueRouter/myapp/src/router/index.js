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
import Footer from '../views/Footer.vue'
import NotFound from '../views/NotFound.vue'
import Search from '../views/Search.vue'

import Man from '../views/discover/Man.vue'
import Girl from '../views/discover/Girl.vue'
import Boy from '../views/discover/Boy.vue'

import store from '../store'

// 2. 安装插件
Vue.use(VueRouter);


// 3. 实例化路由并配置参数
const router = new VueRouter({
    // 配置
    // mode:'hash',
    // 路由规则
    routes: [
        // 重定向
        { path: '/', redirect: '/home' },
        {
            // 当浏览器地址为/home时，显然Home组件内容
            name: 'home', // 命名路由：给路由起个名字，可以通过路由名称进行跳转
            path: '/home',
            // component: Home,
            components:{
                main:Home,
                footer:Footer
            }
        },
        { path: '/discover', redirect: '/discover/man' },
        {
            path: '/discover/:cat',
            component: Discover,
            // 嵌套路由
            // children:[
            //     // {path:'',redirect:{name:'man'}},
            //     {path:'',redirect:'man'},
            //     {
            //         path:'man', // /discover/man
            //         name:'man',
            //         component:Man
            //     },
            //     {
            //         path:'girl', // /discover/girl
            //         component:Girl
            //     },
            //     {
            //         path:'boy',  // /discover/boy
            //         component:Boy
            //     }
            // ],
        },
        {
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/mine',
            component: Mine,
            // 路由元信息
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/search',
            component: Search,
        },

        // 动态路由：路径可变的路由
        {
            path: '/goods/:id',
            name: 'goods',
            // 定义路由时传参
            // props:{a:10,b:20}, // 等效于: <Goods :a='10' :b='20' /> 或 <Goods v-bind="{a:10,b:20}"/>
            // props:function(route){
            //     // route: 当前路由信息（与实例中的$route一致）
            //     return route.params
            // },
            props: true, // 如果 props 被设置为 true，内部会自动把route.params设置为组件属性
            component: Goods,
            beforeEnter(to, from, next) {
                console.log('Goods.beforeEnter')
                next();
            }
        },

        // 404页面
        {
            path:'/notfound',
            component:NotFound
        },

        {
            path:'*',
            redirect:'/notfound'
        }
    ]
})

console.log('router',router);

// 全局路由首尾
router.beforeEach(function (to, from, next) {
    console.log('beforeEach', to)
    // 判断用户登录后才可访问购物车，我的
    if (to.meta.requiresAuth) {
        // let userInfo = JSON.parse(localStorage.getItem('userInfo'));

        let {userInfo} = store.state.user;
        console.log('userInfo=', userInfo);
        if (userInfo) {
            next();

            // 校验token有效性
            router.app.$request.get('/user/verify',{},{
                headers:{
                    Authorization:userInfo.authorization
                }
            }).then((data)=>{
                if(data.code === 400){
                    router.push({
                        path:'/login',
                        query:{
                            targetUrl:to.fullPath
                        }
                    });

                    // 清除本地存储数据
                    // localStorage.removeItem('userInfo')
                    // store.commit('logout');

                    // 设置命名空间后的写法：
                    store.commit('user/logout');
                }
            })
        } else {
            router.push({
                path:'/login',
                query:{
                    targetUrl:to.fullPath
                }
            });
        }
    } else {
        next()
    }
})
router.beforeResolve(function (to, from, next) {
    console.log('beforeResolve')
    next();
})
router.afterEach(function (to, from) {
    console.log('afterEach')
})


export default router;