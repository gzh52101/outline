import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'
import { logout } from './actions/user'

// reducer: Function
// inistate: Object
// middleware: Function
// let enhancer = compose(applyMiddleware(thunk),composeWithDevTools())
let enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

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
