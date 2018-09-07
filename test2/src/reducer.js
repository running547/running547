import { combineReducers } from 'redux'
import {counter} from './index.redux'
import {loginFn} from './login.redux'

export default combineReducers({counter,loginFn})