import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import LoginPage from './Login'

function Login(){
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Redirect to="/login" />
        </Switch>
    )
}

export default Login;