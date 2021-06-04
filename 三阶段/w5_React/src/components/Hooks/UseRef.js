import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer,useRef, useLayoutEffect } from 'react';

const arr1 = []
const arr2 = []

function UseRef() {
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);

    // 创建ref对象，包含一个current属性，值为null
    // 这种方式在组件刷新时每次都创建一个ref对象
    let refObj1 = React.createRef();
    refObj1.current = 10;
    arr1.push(refObj1);
    

    let refObj2 = useRef(10);
    arr2.push(refObj2)
   
    const handleChangeQty = useCallback(()=>{
        setQty(prev=>{
            return prev+1
        })
    },[]);

    useEffect(()=>{
        console.log('ref2',refObj1.current)
    })

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    },[])

    console.log('ref1=',refObj1)
    console.log('ref2',refObj2);
    console.log('arr1=',arr1,arr1[0]==arr1[1]);
    console.log('arr2=',arr2,arr2[0]==arr2[1]);

    return (
        <div>
            <h4>UseRef</h4>
            <button onClick={handleChangeQty} ref={refObj1}>qty:{qty}</button>
        </div>
    )
}

export default UseRef;