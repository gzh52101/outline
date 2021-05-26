import React, { Component } from 'react'
import TodoItem from './TodoItem'

function TodoContent({datalist,onSelectAll}){
    const checkedAll = datalist.every(item=>item.checked);
    return (
        <div className="todo-content">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" checked={checkedAll} onChange={onSelectAll} /></th>
                        <th>#</th>
                        <th>待办事项</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item,idx)=>(
                            <TodoItem 
                                key={item.id} 
                                item={item} 
                                idx={idx} 
                                // onComplete={onComplete}
                                // onRemove={onRemove}
                            />
                        ))
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export default TodoContent;
