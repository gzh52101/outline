import React,{useContext} from 'react';
import myCtx from './context'
// import Todolist from './components/Todolist'
import Lifecycle from './components/Lifecycle'
import Hooks from './components/Hooks'
import MyHook from './components/MyHook'

import {ctx} from './components/Hooks/store'
import imgurl from './assets/img/home.png';

// const imgurl = require("./assets/img/home.png").default;
console.log('imgurl=',imgurl)

function App(){
    const [goodslist] = useContext(ctx)
    const data = [{
        id:1,
        name:'goods1',
        imgurl:'goods1.jpg'
    },{
        id:1,
        name:'goods1',
        imgurl:'goods2.jpg'
    }]

    // 远程图片，建议使用http绝对路径
    data = data.map(item=>{
        item.imgurl = 'http://www.xxx.com/img/' + item.imgurl;
        return item;
    })

    // 图片在本地，建议放入网站根目录，然后采用绝对路径： '/img/xxx.jpg'
    
    return (
        
            <myCtx.Provider value={{username:'jingjing',age:28}}>
                <div>
                    App，<span>购物车：{goodslist.length}</span>

                    {/* <Todolist/> */}

                    {/* <Lifecycle/> */}
                    <Hooks/>

                    {/* <MyHook/> */}

                    {/*  */}
                    <img src="./assets/img/home.png" />
                    <img src={imgurl} />
                    <img src={require('./assets/img/git.png').default} />

                    <img src="./img/user.png" />
                    <img src="/img/user.png" />
                </div>

            </myCtx.Provider>
    )
}

export default App