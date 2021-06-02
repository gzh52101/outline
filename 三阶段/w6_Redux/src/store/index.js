import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'
import { logout } from './actions/user'
import mysaga from './saga/mysaga'

// 1. 安装并引入saga
import createSagaMiddleware from 'redux-saga';

// 2. 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// reducer: Function
// inistate: Object
// middleware: Function

// 3. 将 sagaMiddleware 连接至 Store
// let enhancer = composeWithDevTools(applyMiddleware(thunk))
let enhancer = compose(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
)

// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

// 4. 引入并运行自定义Saga配置
sagaMiddleware.run(mysaga);

export default store;

// 默认：dispatch只允许传入对象作为参数，返回action
// const res1 = store.dispatch({type:'USER_LOGOUT'})
// console.log('res1=',res1);
// const res2 = store.dispatch(function (dispatch) {
//     // ajax().then(()=>{
//     //     dispatch(action)
//     // })
//     return 100
// })
// console.log('res2=', res2);
