export function createStore(reducer,initState){
    // 获取state初始值
   let state = reducer(initState);
   let listeners = []

    const getState = function(){
        return state
    }
    const dispatch = function(action){
        state = reducer(state,action);

        // 遍历监听函数，逐个执行
        listeners.forEach(callback=>{
            callback()
        })
    }

    // 订阅者发布者模式（观察者）
    const subscribe = function(callback){
        listeners.push(callback);// [cb1,cb2,cb3]
        return function unsubscribe(){
            listeners = listeners.filter(item=>item!==callback);// [cb2,cb3]
        }
    }

    // 替换reudcer
    const replaceReducer = function(newReducer){
        reducer = newReducer;
    }

    return {
       getState,
       dispatch,
       subscribe,
       replaceReducer
   }
}

const store = createStore(reducer); // {getState(),dispatch(),subscribe(),replaceReducer()}
store.getState();// state
const unsubscribe = store.subscribe(()=>{
    console.log('state change1')
});
unsubscribe();

store.subscribe(()=>{
    console.log('state change2')
})
store.dispatch({type:'login',user:{}})
store.getState();// 获取最新state

store.replaceReducer(function(state,action){
    // 修改逻辑
})
store.dispatch({type:'login',user:{}})+