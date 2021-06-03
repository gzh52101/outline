import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react';

const initState = [
    { id: 1, name: "goods1", price: 98, qty: 2 },
    { id: 2, name: "goods2", price: 198, qty: 2 },
    { id: 3, name: "goods3", price: 998, qty: 1 },
];
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.id != action.id);
        case 'change':
            return state.map(item => {
                if (item.id === action.id) {
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return []
        default:
            throw new Error('type error');
    }
}
// redux写法
// const store = createStore(reducer,initState)
// store.getState()
// store.dispatch()
// store.subscribe()

function UseReducer() {
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);

    const [goodslist,dispatch] = useReducer(reducer,initState);
    const totalPrice = useMemo(function(){
        return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[goodslist])
    const changeQty = useCallback(function(id,e){
        dispatch({
            type:'change',
            id,
            qty:e.currentTarget.value
        })
    },[])
    const removeItem = useCallback(function(id){
        dispatch({
            type:'remove',
            id
        })
    },[])
    const clearCart = useCallback(function(){
        dispatch({type:'clear'})
    },[])
    return (
        <div>
            <h4>UseReducer</h4>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>商品信息</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        goodslist.map((item,idx)=>{
                            return <tr key={item.id}>
                                <td>{idx+1}</td>
                                <td>
                                    <h4>{item.name}</h4>
                                    <p className="price">{item.price} &times; <input type="number" value={item.qty} onChange={changeQty.bind(null,item.id)}/></p>
                                </td>
                                <td>
                                    <button onClick={removeItem.bind(null,item.id)}>删除</button>
                                </td>
                            </tr>
                        })
                    }
                    
                </tbody>
            </table>
            <div>
                <button onClick={clearCart}>清空购物车</button>
                <span>总价：{totalPrice.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default UseReducer;