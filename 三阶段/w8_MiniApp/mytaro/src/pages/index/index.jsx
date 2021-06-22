import { Component } from 'react'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  state = {
    msg: 'hello'
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }
  changeMsg = (e) => {
    this.setState({
      msg: e.currentTarget.value,
    })
  }
  goto = (url)=>{
    Taro.navigateTo({
      url,
    })
  }

  render() {
    const { counterStore: { counter } } = this.props.store
    const { msg } = this.state;
    return (
      <View className='index'>
        <Button type="primary" onClick={this.increment}>+</Button>
        <Button type="warn" onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <View>div</View>
        <Input value={msg} onChange={this.changeMsg} />
        <Button type="default" onClick={this.goto.bind(this,'/pages/mine/index')}>我的</Button>
      </View>
    )
  }
}

export default Index
