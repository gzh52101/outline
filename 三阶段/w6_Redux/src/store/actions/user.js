/**
 * Action Creator
 * 一个用于生成action的函数
 */
import request from '@/utils/request';

export const LOGIN = 'USER_LOGIN';
export const LOGOUT = 'USER_LOGOUT';

export function login(user) {
    return {
        type: LOGIN,
        user
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}

export function loginAsync(data) {
    return async function (dispatch) {
        const result = await request.post('/login', {
            ...data
        })
        if (result.code === 200) {
            dispatch(login(result.data))
        }

        return result
    }
}


export default {
    login,
    logout,
    loginAsync
}