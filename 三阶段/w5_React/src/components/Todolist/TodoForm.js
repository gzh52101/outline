import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo:''
        }

        this.changeTodo = this.changeTodo.bind(this);
    }
    changeTodo(e){
        this.setState({
            todo:e.currentTarget.value
        })
    }
    render(){
        const {additem} = this.props
        const {todo} = this.state
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
            </div>
        )
    }
}

export default TodoForm;