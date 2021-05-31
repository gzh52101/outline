import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;


ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.getElementById('app')
)