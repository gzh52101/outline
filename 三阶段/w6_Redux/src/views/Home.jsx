import React from 'react'

import { withStorage } from '@/utils/hoc'
import request from '@/utils/request';

function Home(props) {
    request.get('/class',{size:20,page:1,category: "HTML5"}).then(res=>{
        
    })
    return (
        <div>
            Home
            <button onClick={() => {
                props.history.push('/login')
            }}>去登录</button>
        </div>
    )
}

Home = withStorage('token','userInfo','mydata','xxx')(Home);

export default Home;