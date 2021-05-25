import React from 'react'
console.log('react=',React)
function TodoButton(props) {
    // console.log('TodoButton=',props)
    // console.log('Children',React.Children.count(props.children))
    return (
        <button onClick={props.onClick}>{React.Children.count(props.children)===0?props.children(100) : props.children}</button>
    )
}

export default TodoButton;