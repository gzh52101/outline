import React, { Component } from 'react'

function TodoContent({datalist}){
    return (
        <div className="todo-content">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>#</th>
                        <th>待办事项</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item,idx)=>(
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td>{idx+1}</td>
                                <td>{item.todo}</td>
                                <td>{item.complete ? '是':'否'}</td>
                                <td>
                                    <button>完成</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export default TodoContent;
