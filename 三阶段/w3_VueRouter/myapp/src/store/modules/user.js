// 刷新时从本地存储获取用户信息（数据持久化）
let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}


export default {
    state:{
        userInfo
    },
    getters:{
        isLogin(state){
            return !!state.userInfo._id;
        }
    },
    mutations:{
        login(state,payload){
            state.userInfo = payload;

            // 存入本地存储
            localStorage.setItem('userInfo',JSON.stringify(payload))
        },
        logout(state){
            state.userInfo = {}

            localStorage.removeItem('userInfo');
        }
    }
}