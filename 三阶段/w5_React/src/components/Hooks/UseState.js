import React,{useState} from 'react';

function UseState(){
    console.log('UseState')
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState({count:10,a:1,b:2});
    
    return (
        <div>
            <h4>UseState</h4>
            <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                const newCount = {count:count.count+1}
                setCount(newCount)
            }}>count:{JSON.stringify(count)}</button>
        </div>
    )
}

export default UseState;