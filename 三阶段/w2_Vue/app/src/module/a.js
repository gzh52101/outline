// 给<模块对象>添加username属性
export const username = 'laoxie'

// 给<模块对象>添加getUser方法
export function getUser(){
    return username;
}

// 给模块对象添加default属性
export default {a:10}

const age = 18;
const password = '123456'
const isDanshen = true;

// 批量给模块对象添加属性
export {
    age as myage,
    password,
    isDanshen
}

// script src=""
// import 