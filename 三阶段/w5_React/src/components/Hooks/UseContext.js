import React,{useState,useEffect,useMemo,useCallback,useContext} from 'react';
import myCtx from '../../context'

function UseContext(){
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const value = useContext(myCtx);
    console.log('value=',value);

    const changeQty = useCallback(function(){
        setQty(prev=>prev+1)
    },[])
    const changeCount = useCallback(function(){
        setCount(prev=>prev+5)
    },[])
    return (
        <div>
            <h4>UseContext</h4>
            {/* <myCtx.Consumer>
                {
                    (value)=>{
                        console.log('value=',value)
                        return <div></div>
                    }
                }
            </myCtx.Consumer> */}
            <button onClick={changeQty}>qty:{qty}</button>
            <button onClick={changeCount}>count:{count}</button>
        </div>
    )
}

export default UseContext;