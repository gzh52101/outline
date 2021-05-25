import React, { Component } from 'react';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'

class Todolist extends Component {
    constructor(props) {
        super(props);

        // 定义组件状态
        this.state = {
            list: [{
                id: 1,
                todo: '定个小目标睡一整天',
                complete: true,
                checked: true,
                addtime: Date.now()
            }, {
                id: 2,
                todo: '赚他一个亿津巴布韦币',
                complete: false,
                checked: true,
                addtime: Date.now() + 3600
            }, {
                id: 3,
                todo: '迎娶白富美，达到人生巅峰',
                complete: false,
                checked: false,
                addtime: Date.now() + 360 * 1000
            }],
        }

        // 改变自定义函数的this指向
        this.addItem = this.addItem.bind(this);
    }

    // 自定义函数中的this指向为undefined
    addItem(todo) {console.log('addItem',todo);
        const { list } = this.state;
        const item = {
            id: Math.ceil(Math.random() * 10000),
            todo,
            complete: false,
            checked: false,
            addtime: Date.now()
        }
        

        this.setState({
            list: [item, ...list]
        })
    }
    removeItem() {

    }
    completeItem() {

    }
    render() {
        // this.props;
        const { list } = this.state;
        return (
            <div className="todolist">
                <h4>TodoList</h4>
                <TodoForm additem={this.addItem} />
                <TodoContent datalist={list} />
            </div>
        )

    }
}

export default Todolist;