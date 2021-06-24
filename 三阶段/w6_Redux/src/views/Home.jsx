import React,{useCallback} from 'react'

import { withStorage } from '@/utils/hoc'
import request from '@/utils/request';

function Home(props) {
    request.get('/class',{size:20,page:1,category: "HTML5"}).then(res=>{
        
    })
    const scan = useCallback(()=>{
        try{
            plus.barcode.create()
        }catch(err){
            console.log('请在打包后使用该功能')
        }
    },[])
    return (
        <div>
            Home
            <button onClick={() => {
                props.history.push('/login')
            }}>去登录</button>

            <button onClick={scan}>扫码</button>
        </div>
    )
}

Home = withStorage('token','userInfo','mydata','xxx')(Home);

export default Home;