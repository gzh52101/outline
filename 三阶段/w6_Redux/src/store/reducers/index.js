import {combineReducers } from 'redux';

import cart from './cart'
import global from './global'
import user from './user'

const rootReducer = combineReducers({
    cart,
    global,
    user
})

export default rootReducer;