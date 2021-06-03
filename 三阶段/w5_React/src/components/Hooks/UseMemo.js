import React,{useState,useEffect,useMemo} from 'react';

const data = [
    {name:'good1',price:128,qty:1},
    {name:'good2',price:218,qty:2},
    {name:'good3',price:998,qty:1},
    {name:'good4',price:10328,qty:10},
    {name:'good5',price:98,qty:1},
]
function UseMemo(){
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const [goodslist,changeGoodslist] = useState(data);

    // 传统用法：每次组件刷新都会重新计算
    // const totalPrice = goodslist.reduce((prev,item)=>{
    //     console.log('calc')
    //     return prev+item.price*item.qty
    // },0);

    // useMemo优化
    // 用法一：默认用法（等效于传统用法，不推荐）
    // const totalPrice = useMemo(function(){
    //     console.log('用法一：默认用法')
    //     return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    // });
    // 用法二：空依赖
    // const totalPrice = useMemo(function(){
    //     console.log('用法二：空依赖')
    //     return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    // },[]);

    // 用法三：指定依赖
    const totalPrice = useMemo(function(){
        console.log('用法三：指定依赖')
        return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[goodslist]);
    
    return (
        <div>
            <h4>UseMemo</h4>
            <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+5)
            }}>count:{count}</button>
            <button onClick={()=>{
                changeGoodslist([{name:'good6',price:18,qty:2},...goodslist])
            }}>添加商品</button>


            <p>总价：{totalPrice}</p>
        </div>
    )
}

export default UseMemo;