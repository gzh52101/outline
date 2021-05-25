import React, { Component } from 'react';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'

import './style.scss';
import ctx from './context';

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
        this.completeItem = this.completeItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    // 自定义函数中的this指向为undefined
    addItem(todo) {
        console.log('addItem', todo);
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
    removeItem(id) {
        let { list } = this.state;
        list = list.filter(item => item.id != id);
        this.setState({
            list
        })
    }
    completeItem(id) {
        let { list } = this.state;
        list = list.map(item=>{
            if(item.id === id){
                item.complete = true;
            }
            return item;
        })
        this.setState({
            list
        })
    }
    render() {
        // this.props;
        const { list } = this.state;
        return (
            <div className="todolist">
                <h4 style={{color:'#58bc58'}}>TodoList</h4>
                <ctx.Provider value={{removeItem:this.removeItem,completeItem:this.completeItem}}>
                    <TodoForm additem={this.addItem} />
                    <TodoContent 
                    datalist={list} 
                    onComplete={this.completeItem}
                    onRemove={this.removeItem}
                    />

                </ctx.Provider>
            </div>
        )

    }
}

export default Todolist;