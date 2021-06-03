import React from 'react';
import myCtx from './context'
// import Todolist from './components/Todolist'
import Lifecycle from './components/Lifecycle'
import Hooks from './components/Hooks'

function App(){
    return (
        <myCtx.Provider value={{username:'jingjing',age:28}}>
            <div>
                App

                {/* <Todolist/> */}

                {/* <Lifecycle/> */}
                <Hooks/>
            </div>

        </myCtx.Provider>
    )
}

export default App