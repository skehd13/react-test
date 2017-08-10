import {LOGIN_OUT, RECEIVE_POSTS, REQUEST_POSTS, RECEIVE_USERS, REQUEST_USERS, SELECT_ID, RECEIVE_LOGIN} from "./action"
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
        // case RECEIVE_POSTS:
        //     return Object.assign({}, state, {
        //         id:action.info.id,
        //         password:action.info.password,
        //         phone:action.info.phone,
        //         userName:action.info.userName,
        //         loginState:action.loginState
        //     })
        // case LOGIN_OUT:
        //     return Object.assign({}, state, {
        //         id:'',
        //         password:'',
        //         phone:'',
        //         userName:'',
        //         loginState:action.loginState
        //     })
        // default:
        //     return state
        //로그인완료시 로그인정보를 store-fetch에 저장
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                id:action.info.id,
                password:action.info.password,
                phone:action.info.phone,
                userName:action.info.userName,
                loginState:action.loginState
            })
        //로그인, 로그아웃버튼 클릭시 store-fetch데이터 변경
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

function usersById(
    // state = {}, action) {
    // switch (action.type){
    //     case RECEIVE_USERS:
    //     case REQUEST_USERS:
    //         return Object.assign({}, state, {
    //             user : users(state[action.id], action)
    //         })
    //     default:
    //         return state
    // }
    state = {
        isFetching:false,
        users:[]
    }, action) {
    switch (action.type){
        //모든유저정보를 요청
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching:true
            })
        //모든유저정보를 가져와서 store-userById에 저장
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching:false,
                users: action.users
            })
        default: return state
    }
}

const loginInfoApp = combineReducers({
    fetch,
    usersById
})
export default loginInfoApp