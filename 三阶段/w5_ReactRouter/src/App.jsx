import React from 'react'

import { HashRouter, BrowserRouter, Route, Link, NavLink, Redirect, Switch,withRouter } from 'react-router-dom'

import Home from './views/Home';
import Login from './views/Login';
import Reg from './views/Reg';
import Class from './views/Class';

import 'antd/dist/antd.css';
import './style.scss'

import {withUser} from './utils/hoc'

import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import { HomeOutlined, LoginOutlined, UserAddOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, DingtalkOutlined } from '@ant-design/icons'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
@withUser
class App extends React.Component {
    constructor(props){
        super(props);
        console.log('App.props=',props);
        this.state = {
            menu: [{
                path: '/home',
                text: '首页',
                icon: <HomeOutlined />
            }, {
                path: '/login',
                text: '登录',
                icon: <LoginOutlined />
            }, {
                path: '/reg',
                text: '注册',
                icon: <UserAddOutlined />
            }],
            mainMenu:[
                {
                    path: '/class',
                    text: '班级管理',
                    children:[
                        {
                            path:'/list',
                            text:'班级列表'
                        },
                        {
                            path:'/add',
                            text:'添加班级'
                        }
                    ]
                },
                {
                    path: '/student',
                    text: '学生管理',
                },
                {
                    path: '/category',
                    text: '学科管理',
                },
                {
                    path: '/school',
                    text: '分校管理',
                },
                {
                    path: '/project',
                    text: '项目管理',
                },
            ],
            current: props.location.pathname || '/home'
        }
    }
    changeMenu = ({key}) => {
        const {history} = this.props;
        
        history.push(key);
    }
    // UNSAFE_componentWillMount(){
    //     // 刷新保持高亮
    //     const {location} = this.props;
    //     this.state.current = location.pathname
    // }
    componentDidMount(){
        console.log('App.props',this.props);
        const {history,location} = this.props;
        
        
        // 监听路由变化，实现导航高亮
        history.listen((location)=>{
            this.setState({
                current: location.pathname
            })
        })

        // // 获取用户信息
        // let userInfo = localStorage.getItem('userInfo')
        // try{
        //     userInfo = JSON.parse(userInfo) || {}
        // }catch(err){
        //     userInfo = {}
        // }

        // this.setState({
        //     userInfo
        // })
    }
    render() {
        const { current, menu,mainMenu } = this.state;
        return (
            <Layout>
                <Header className="header">
                    <Row gutter={20}>
                        <Col flex="190px">
                            <div className="logo">
                                <DingtalkOutlined style={{color:'#ff0',fontSize:40}} /> 钉钉管理系统
                            </div></Col>
                        <Col flex={1}>
                            <Menu onSelect={this.changeMenu} selectedKeys={[current]} mode="horizontal" theme="dark">
                                {
                                    menu.map(item => <Menu.Item key={item.path} icon={item.icon}>
                                        {item.text}
                                    </Menu.Item>)
                                }
                            </Menu></Col>
                        <Col flex="100px" className="txt-right"><Button type="link">退出</Button></Col>
                    </Row>


                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onSelect={this.changeMenu}
                        >
                            {
                                mainMenu.map(item=>(
                                    <SubMenu key={item.path} title={item.text}>
                                        {
                                             item.children ? 
                                             item.children.map(it=>(
                                                <Menu.Item key={item.path + it.path}>{it.text}</Menu.Item>
                                            ))
                                            :
                                            <Menu.Item key={item.path + "nodata"}>暂无数据</Menu.Item>
                                        }
                                    </SubMenu>
                                ))
                            }
                            
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/class" component={Class} />
                                <Route path="/login" component={Login} />
                                {/* <Route path="/reg" component={Reg} /> */}
                                {/* <Route path="/reg">
                                    <Reg />
                                </Route> */}
                                {/* <Route path="/notfound" component={()=><div>404</div>} /> */}
                                <Route path="/notfound" render={() => <div>404</div>} />
                                {/* 默认页面 */}
                                <Redirect from="/" to="/home" exact />
                                {/* 404 */}
                                <Redirect to="/notfound" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

// 本质：把App组件传入一个函数中并返回新的组件
// App = withUser(App)
// App = withRouter(App);


export default App;