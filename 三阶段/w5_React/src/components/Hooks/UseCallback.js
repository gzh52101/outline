import React,{useState,useEffect,useMemo,useCallback} from 'react';

const arr = []

function UseCallback(){
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);

    // 传统写法
    // const handle = function(){}

    // 用法一：不指定依赖（不推荐）
    // const handle = useCallback(function(){
        
    // })
    // 用法二：空依赖
    // const handle = useCallback(function(){
    //     // console.log('qty=',qty);
    //     return qty;
    // },[])

    // 用法三：指定依赖（当依赖发生改变时会重新创建一个函数，否则获取之前缓存的函数）
    const handle = useCallback(function(){
        // console.log('qty=',qty);
        return qty;
    },[qty])
    arr.push(handle)
    console.log('arr',arr,arr[0]==arr[1],handle())

    const handleChangeQty = useCallback(function(){
        setQty(function(prevQty){
            console.group('prevQty=',prevQty)
            return prevQty+1;
        })
    },[])
    return (
        <div>
            <h4>UseCallback</h4>
            {/* <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button> */}
            <button onClick={handleChangeQty}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+5)
            }}>count:{count}</button>
        </div>
    )
}

export default UseCallback;