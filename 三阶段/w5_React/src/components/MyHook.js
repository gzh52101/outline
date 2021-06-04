import React,{useCallback} from 'react';

import {useStorage} from '../utils/hooks'

function MyHook(){
    const [user,setUser] = useStorage('userInfo');
    console.log('user=',user);
    const changeGender = useCallback((e)=>{
        const newUser = {...user,gender:e.currentTarget.value}
        setUser(newUser)
    })
    return (
        <div>
            <h4>MyHook</h4>
            <div>用户名：{user.username}</div>
            <div>性别：<select value={user.gender} onChange={changeGender}>
                    <option value="女">女</option>
                    <option value="男">男</option>
                    <option value="不详">不详</option>
                </select></div>
        </div>
    )
}

export default MyHook;