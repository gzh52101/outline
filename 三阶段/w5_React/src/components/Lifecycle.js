import React,{Component,PureComponent} from 'react'

class Lifecycle extends PureComponent{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            qty:1,
            goods:{}
        }
    }
    // state = {
    //     qty:1
    // }

    changeQty = ()=>{
        // 用法一
        this.setState({
            qty:10
        },()=>{
            // 回调函数在值修改后执行
            console.log('callback=',this.state.qty)
        })
        // this.setState({
        //     qty:this.state.qty+1
        // })
        this.setState((prevState)=>{
            console.log('prevState=',prevState.qty)
            return {
                qty:prevState.qty+1
            }
        })
        console.log('qty=',this.state.qty);
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('componentWillReceiveProps');

    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // nextProps
    //     // nextState: 将要修改的值
    //     console.log('state.qty=',this.state.qty)
    //     console.log('nextState.qty=',nextState.qty)
    //     if(nextState.qty%5 === 0){
    //         return true;

    //     }else{
    //         return false;
    //     }
        
    // }

    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        const {qty} = this.state;
        console.log('render');
        return (
            <button onClick={this.changeQty}>qty:{qty}</button>
        )
    }
}

export default Lifecycle;