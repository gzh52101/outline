import React,{useState} from 'react';

/** 
    * 自定义Hook
        * hook是一个函数，以use开头命名
 */

// 利用hook实现获取与修改本地存储数据
export function useStorage(key){
    let data = localStorage.getItem(key)
    try{
        data = JSON.parse(data);
    }catch(err){
        data = data;
    }

    const [state,setState] = useState(data);

    let setData = function(newData){
        setState(newData);

        if(typeof newData === 'object'){
            newData = JSON.stringify(newData);
        }
        localStorage.setItem(key,newData)
    }

    return [state,setData];
}
