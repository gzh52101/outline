import React,{useState} from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import UseRef from './UseRef'

function Hooks(){
    const [show,changeShow] = useState(true)
    return (
        <div>
            <h1>Hooks</h1>

            {/* <UseState></UseState>

            {
                show ? 
                <UseEffect/>
                :
                <p>已隐藏</p>
            }

            <button onClick={()=>{
                changeShow(!show)
            }}>show:{show ? '显示' : '隐藏'}</button>
            <UseMemo/>
            <UseCallback/>
            <UseContext/>
            <UseReducer/> */}
            <UseRef/>
        </div>
    )
}

export default Hooks;