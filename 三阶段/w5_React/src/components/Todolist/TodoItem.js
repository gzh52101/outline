import React from 'react'

import TodoButton from './TodoButton'
import ctx from './context'

function TodoItem({ item, idx, onComplete, onRemove }) {
    return (
        <ctx.Consumer>
            {
                (value) => {
                    console.log('values=', value);
                    return (
                        <tr onClick={value.selectItem.bind(null,item.id)}>
                            <td><input type="checkbox" checked={item.checked} readOnly /></td>
                            <td>{idx + 1}</td>
                            <td>{item.todo}</td>
                            <td>{item.complete ? '是' : '否'}</td>
                            <td>
                                {/* <button onClick={onComplete.bind(null,item.id)}>完成</button>
                <button onClick={onRemove.bind(null,item.id)}>删除</button>
                <button onClick={()=>{
                    onRemove(item.id);
                }}>删除</button> */}

                                {/* <TodoButton onClick={onComplete.bind(null,item.id)}>
                    <strong>完成</strong><i>xxx</i>
                </TodoButton>
                <TodoButton onClick={onRemove.bind(null,item.id)}>删除</TodoButton> */}
                                {/* <TodoButton onClick={onRemove.bind(null,item.id)}>{
                    (num)=>{
                        return <span>span{num}</span>
                    }
                }</TodoButton> */}

                                <TodoButton onClick={value.completeItem.bind(null, item.id)}>
                                    <strong>完成</strong><i>xxx</i>
                                </TodoButton>
                                <TodoButton onClick={value.removeItem.bind(null, item.id)}>删除</TodoButton>

                            </td>
                        </tr>
                    )
                }
            }

        </ctx.Consumer>
    )
}

export default TodoItem;