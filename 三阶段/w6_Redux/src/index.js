import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Login from './views/Login'
import {Provider,connect} from 'react-redux'
import { Content } from 'antd/lib/layout/layout';
import store from './store'
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

let Main = (props)=>{
    return (
        props.isLogin ? 
        <App/>
        :
        <Login/>
    )
}
Main = connect((state)=>({isLogin:!!state.user.userInfo}))(Main)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
    ,
    document.getElementById('app')
)