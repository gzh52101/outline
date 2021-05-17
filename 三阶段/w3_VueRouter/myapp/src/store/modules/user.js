// 刷新时从本地存储获取用户信息（数据持久化）
let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}


export default {
    // 设置独立命名空间
    namespaced:true,
    
    state:{
        userInfo
    },
    getters:{
        isLogin(state,getters,rootState,rootGetters){
            // state: 当前模块state
            // getters: 当前模块getters
            // rootState: 全局state
            // rootGetters: 全局getters
            console.log('getters.isLogin',state,getters,rootState,rootGetters)
            return !!state.userInfo._id;
        }
    },
    mutations:{
        login(state,payload){
            state.userInfo = payload;

            // 存入本地存储
            localStorage.setItem('userInfo',JSON.stringify(payload))
        },
        logout(state,payload){
            state.userInfo = {}

            localStorage.removeItem('userInfo');
        }
    },
    actions:{
        test(context,payload){
            console.log('action.test.context=',context)
            // context： 一个类似与store的对象
            //  * dispatch()
            //  * commit()
            //  * state
            //  * getters
            //  * rootState
            //  * rootGetters

            // 在action中触发当前模块的mutation
            // context.commit('login')

            // 调用其他actions
            context.dispatch('test2')

            // 在当前模块中触发全局模块的mutation/action
            context.commit('add',null,{root:true})
            context.dispatch('add2',null,{root:true})

            
        },
        test2(){

        }
    }
}