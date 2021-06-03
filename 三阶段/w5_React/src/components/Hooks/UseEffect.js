import React,{useState,useEffect} from 'react';

function UseEffect(){
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const [page,changePage] = useState(1);
    const [classList,setClass] = useState([])

    // 用法一：默认用法（等效于componentDidMount + componentDidUpdate的效果）
    useEffect(function(){
        // 这里的代码在渲染结束后执行
        console.log('用法一：默认用法')
    })

    // 用法二：空依赖（等效于componentDidMount）
    useEffect(function(){
        // 这里的代码在初始化时执行
        console.log('用法二：空依赖')
        // 发起ajax请求
        // request.get('/class').then(data=>{
        //     setClass(data.data)
        // })
    },[])

    // 用法三：指定依赖（等效于comonentDidMount+shouldComponentUpdate的效果）
    useEffect(function(){
        // 这里的代码在初始化和count修改时执行
        console.log("用法三：指定依赖")
    },[count,page]); // 依赖为或的关系
    // console.log('Function render')

    // 用法四：返回函数（等效于componentWillUnmount的效果）
    useEffect(function(){

        return function(){
            // 这里的代码在组件销毁时执行
            console.log('用法四：返回函数')
        }
    })
    return (
        <div>
            <h4>UseEffect</h4>
            <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+5)
            }}>count:{count}</button>
            <button onClick={()=>{
                changePage(page+1)
            }}>page:{page}</button>
        </div>
    )
}

export default UseEffect;