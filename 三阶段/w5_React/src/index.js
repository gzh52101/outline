
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import {Provider} from './components/Hooks/store'

import App from './App'


ReactDOM.render(
    <Provider>
        <App/>
    </Provider>
    ,
    document.querySelector('#app')
)