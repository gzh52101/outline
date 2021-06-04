import React,{useContext} from 'react';
import myCtx from './context'
// import Todolist from './components/Todolist'
import Lifecycle from './components/Lifecycle'
import Hooks from './components/Hooks'
import MyHook from './components/MyHook'

import {ctx} from './components/Hooks/store'

function App(){
    const [goodslist] = useContext(ctx)
    return (
        
            <myCtx.Provider value={{username:'jingjing',age:28}}>
                <div>
                    App，<span>购物车：{goodslist.length}</span>

                    {/* <Todolist/> */}

                    {/* <Lifecycle/> */}
                    <Hooks/>

                    {/* <MyHook/> */}
                </div>

            </myCtx.Provider>
    )
}

export default App