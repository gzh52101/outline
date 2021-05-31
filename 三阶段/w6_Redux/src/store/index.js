import { createStore } from 'redux';

let userInfo  = localStorage.getItem('userInfo');
try{
    userInfo = JSON.parse(userInfo)
}catch(err){
    userInfo = null;
}

const initState = {
    cartlist:[],
    menuVisibility:true,
    userInfo
}

// 定义如何修改state
const reducer = function(state,action){
    // state: 最新状态
    // action: 触发修改的命令，通过dispatch发送到reducer
    switch(action.type){
        case 'login':
            const newState = {
                ...state,
                userInfo:action.user
            }
            localStorage.setItem('userInfo',JSON.stringify(action.user));
            return newState
        case 'logout':
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:null
            }
        default:
            return state;   
    }
}

const store = createStore(reducer,initState)
console.log('state',store.getState());

// 监听state修改
// store.subscribe(function(){
//     // 这里的函数在state被修改时触发
//     console.log('state change=',store.getState());

// })

// 登录
// const action = {type:'login',user:{username:'laoxie',role:'admin',token:'xxxx'}}
// setTimeout(()=>{
//     store.dispatch(action)

// },2000)
// store.dispatch({type:'logout'})

export default store;