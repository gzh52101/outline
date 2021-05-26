import React from 'react'

import {HashRouter,BrowserRouter,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'

import Home from './views/Home';
import Login from './views/Login';
import Reg from './views/Reg';



function App(){
    const menu = [{
        path:'/home',
        text:'首页',
    },{
        path:'/login',
        text:'登录',
    },{
        path:'/reg',
        text:'注册',
    }]
    return (
        <div>
            App
            {/* 使用路由必须首先确定路由类型 */}
                <nav>
                    {/* <Link to="/home">首页</Link>
                    <Link to="/login">登录</Link>
                    <Link to="/reg">注册</Link> */}
                    {
                        menu.map(item=><NavLink key={item.path} to={item.path} activeStyle={{color:'#f00',fontSize:18}}>{item.text}</NavLink>)
                    }
                    
                    
                </nav>

                <div className="view">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        {/* <Route path="/reg" component={Reg} /> */}
                        <Route path="/reg">
                            <Reg/>
                        </Route>
                        {/* <Route path="/notfound" component={()=><div>404</div>} /> */}
                        <Route path="/notfound" render={()=><div>404</div>} />
                        {/* 默认页面 */}
                        <Redirect from="/" to="/home" exact />
                        {/* 404 */}
                        <Redirect to="/notfound" />
                    </Switch>
                </div>
        </div>
    )
}

export default App;