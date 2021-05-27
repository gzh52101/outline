import React from 'react'
import { Redirect } from 'react-router-dom';

/**
 * 定义高阶组件方式一：属性代理
 */
export function withUser(InnerComponent) {
    return function OuterComponent(props) {
        console.log('OuterComponent=', props);
        // 获取用户信息
        let userInfo = localStorage.getItem('userInfo')
        try {
            userInfo = JSON.parse(userInfo) || {}
        } catch (err) {
            userInfo = {}
        }
        return (
            <InnerComponent {...props} user={userInfo} />
        )
    }
}

/**
 * 高阶组件：withStorage
 * 获取本地存储中的任意数据
 * @函数柯里化，@闭包
 */

export function withStorage(...keys) {
    return function withStorage(InnerComponent) {
        return class OuterComponent extends React.Component {
            constructor(props){
                super(props);

                let values = {}
                keys.forEach(key=>{
                    let value = localStorage.getItem(key)
                    try {
                        value = JSON.parse(value)
                    } catch (err) {
                        value = value
                    }
                    values[key] = value;
                })

                this.state = {
                    values
                }
            }
            componentDidMount() {
                // let value = localStorage.getItem(key)
                // try {
                //     value = JSON.parse(value) || {}
                // } catch (err) {
                //     value = {}
                // }
                // this.setState({
                //     value
                // })
            }
            render() {
                return (
                    <InnerComponent {...this.props} {...this.state.values}/>
                )
            }
        }

    }
}

// 函数柯里化
// App = getStorage('token')(App)

export function withAuth(InnerComponent){
    @withStorage('userInfo')
    class OuterComponent extends React.Component{
        render(){
            const {userInfo} = this.props;
            if(userInfo){
                return (
                    <InnerComponent {...this.props} />
                )
            }else{
                return <Redirect to="/login" />
            }

        }
    } 
    // OuterComponent = withStorage('userInfo')(OuterComponent)
    return OuterComponent;
}


/**
 * 定义高阶组件方式二：反向继承
 * 只适用于类组件
 */
// export function withAuth(InnerComponent){
//     class OuterComponent extends InnerComponent{
//         componentDidMount(){
//             super.componentDidMount();
//         }
//         render(){
//             const {userInfo} = this.props;
//             // return (
//             //     <div>OuterComponent</div>
//             //     // 如果用于已登录，则显示InnerComponent的内容
//             //     // 否则跳到登录页面
//             // )
//             if(userInfo){
//                 return super.render();
//             }else{
//                 return <Redirect to="/login" />
//             }
//         }
//     }

//     OuterComponent = withStorage('userInfo')(OuterComponent)

//     return OuterComponent
// }