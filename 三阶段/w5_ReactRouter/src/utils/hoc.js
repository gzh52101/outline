import React from 'react'

export function withUser(InnerComponent){
    return function OuterComponent(props){
        console.log('OuterComponent=',props);
        // 获取用户信息
        let userInfo = localStorage.getItem('userInfo')
        try{
            userInfo = JSON.parse(userInfo) || {}
        }catch(err){
            userInfo = {}
        }
        return (
            <InnerComponent {...props} user={userInfo} />
        )
    }
}
