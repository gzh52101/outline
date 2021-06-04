import React from 'react'
import { Form, Input, Checkbox, Button, message } from 'antd'
import request from '@/utils/request'
// import store from '@/store'
import { connect,useDispatch,useSelector } from 'react-redux';
import userAction from '@/store/actions/user'
import { Redirect } from 'react-router';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

function Login(props) {
    console.log("Login.props=", props);
    // const isLogin = useSelector(function(state){
    //     return !!state.user.userInfo
    // })
    const rules = {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
        vcode: [{ required: true, message: '请输入验证码' }],
    }
    const onFinish = async (values) => {
        console.log('values=', values);

        // const data = await request.post('/login', {
        //     ...values
        // })
        // if (data.code === 200) {
        //     // store.dispatch({type:'login',user:data.data})
        //     props.login(data.data);
        //     props.history.replace('/home')
        //     message.success('登录成功')
        // }
        props.login(values);
        // if (result.code === 200) {
        //     props.history.replace('/home')
        //     message.success('登录成功')
        // }

    }
    return (
        props.isLogin ? 
        <Redirect to="/home" />
        :
        <div>
            <h1>用户登录</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>
                {/* <Form.Item
                label="验证码"
                name="vcode"
                rules={rules.vcode}
            >
                <Input addonAfter={<span>dfsadf</span>} />
            </Form.Item> */}

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>下次免登录</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
const mapStateToProps = (state)=>({isLogin:!!state.user.userInfo});
const mapDispatchToProps = dispatch => ({
    login(data) {
        // dispatch({type:'login',user})
        // dispatch(userAction.login(user))
        // return dispatch(userAction.loginAsync(data));
        dispatch({ type: 'USER_LOGIN_ASYNC', user: data })
    }
})
Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;