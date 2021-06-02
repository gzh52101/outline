import { takeEvery, takeLatest,put,call,apply,delay} from 'redux-saga/effects'
import userAction,{ LOGIN, LOGOUT } from '../actions/user'
import request from '@/utils/request'


function* init() {
    // 这里的代码会自动执行
    console.log('hello saga');

    // 监听saga action
    yield takeLatest(LOGIN + '_ASYNC',login);
    yield takeLatest('CHANGE_QTY_ASYNC',changeQty);console.log('init2')
}

// 单元测试：测试用例
function * login(action){
    // const result = yield request.post('/login', {
    //     ...action.user
    // }) 
    const result = yield call(request.post,'/login',{...action.user})

    if(result.code === 200){
        yield put(userAction.login(result.data));
    }
}

function * changeQty(action){
    // 发起ajax请求获取库存
    
}

export default init;
