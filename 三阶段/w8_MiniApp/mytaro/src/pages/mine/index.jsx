import { Component } from 'react'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtButton } from 'taro-ui'

import './index.scss'


@inject('store')
@observer
class Mine extends Component {
  state = {
    msg: 'hello'
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeMsg = (e) => {
    this.setState({
      msg: e.currentTarget.value,
    })
  }

  render() {
    const { counterStore: { counter } } = this.props.store
    const { msg } = this.state;
    return (
      <View className='mine'>
        我的

        <AtButton>凹凸按钮</AtButton>
        <AtButton full>凹凸按钮</AtButton>
        <AtButton type="primary">凹凸按钮</AtButton>
      </View>
    )
  }
}

export default Mine
