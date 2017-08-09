import {LOGIN_OUT, RECEIVE_POSTS} from "./action"
import {combineReducers} from 'redux'

const loginInfoInitialState = {
    id:'',
    password:'',
    phone:'',
    userName:'',
    loginState:0,
}

const fetch = (state = loginInfoInitialState, action) => {
    switch (action.type){
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                id:action.info.id,
                password:action.info.password,
                phone:action.info.phone,
                userName:action.info.userName,
                loginState:action.reddit
            })
        case LOGIN_OUT:
            return Object.assign({}, state, {
                id:'',
                password:'',
                phone:'',
                userName:'',
                loginState:action.loginState
            })
        default:
            return state
    }
}

const loginInfoApp = combineReducers({
    fetch
})
export default loginInfoApp