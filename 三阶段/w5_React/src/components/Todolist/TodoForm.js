import React, { Component } from 'react'

import ctx from './context'

class TodoForm extends Component {
    // 静态属性写法：写在类本身
    // static contextType = ctx; // TodoForm.contextType
    // static abc = 100;
    // static test(){ // 静态方法：TodoForm.test(); Object.keys();Array.isArray();Array.from(),jQuery.ajax()

    // }

    constructor(props){
        super(props);

        // 这里的属性写在实例中
        this.state = {
            todo:''
        }

        this.changeTodo = this.changeTodo.bind(this);
    }

    // 这里的方法写在原型中
    changeTodo(e){
        this.setState({
            todo:e.currentTarget.value
        })
    }

    // 箭头函数: 写在实例中
    // testMethod = ()=>{

    // }
    render(){
        const {additem} = this.props
        const {todo} = this.state
        console.log('todoForm.context',this.context)
        return (
            <div className="todo-form">
                <input value={todo} onChange={this.changeTodo} ref={(el)=>{
                    this.todo = el;
                }} />
                {/* <button onClick={additem.bind(this,todo)}>添加</button> */}
                <button onClick={()=>{
                    additem(todo);
                    this.setState({
                        todo:''
                    })

                    this.todo.focus();
                }}>添加</button>
                {/* <ctx.Consumer>
                    {(value)=>{
                        console.log('todoForm.value',value)
                    }}
                </ctx.Consumer> */}
            </div>
        )
    }
}

// 添加contextType静态属性
// TodoForm.contextType = ctx;

console.log('TodoForm实例=',new TodoForm());
console.dir(TodoForm)

export default TodoForm;