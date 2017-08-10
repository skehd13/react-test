export const LOGIN_OUT = 'LOGIN_OUT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SELECT_ID = 'SELECT_ID'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
//로그인상태변경
export function login_out(value) {
    return{
        type:LOGIN_OUT,
        loginState:value
    }
}
//회원가입요청
function requestPosts(loginState) {
    return{
        type:REQUEST_POSTS,
        loginState
    }
}
//회원가입완료
function receivePosts(loginState, json) {
    return{
        type:RECEIVE_POSTS,
        loginState,
        info:json
    }
}
//모든유저정보요청
function requestUsers() {
    return{
        type:REQUEST_USERS
    }
}
//모든유저정보완료
function receiveUsers(json) {
    return{
        type:RECEIVE_USERS,
        users:json
    }
}
//로그인시작
function requestLogin() {
    return{
        type:REQUEST_LOGIN
    }
}
//로그인성공
function receiveLogin(loginState, info) {
    return{
        type:RECEIVE_LOGIN,
        loginState,
        info
    }
}
//회원가입
export function insertFetchPosts(loginState, id, password, phone, userName) {
    return function (dispatch) {
        dispatch(requestPosts(loginState))
        if (id == '' || password =='' || userName =='' || phone == ''){
            alert('모든정보를 입력해주세요')
            return
        }
        const insertData = JSON.stringify({
            id:id,
            password:password,
            phone:phone,
            userName:userName
        })
        return fetch('http://localhost:1337/user',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:insertData
        }).then(response => {
            console.log(response)
            if (response.ok) {
                dispatch(receivePosts(loginState, JSON.parse(insertData)))
                alert('회원가입 완료')
            } else {
                return Promise.reject('이미 있는 아이디 입니다')
            }
        }).catch(err =>{
            alert(err)
        })
    }
}
//로그인
export function loginFetch(loginState, id, password) {
    return function (dispatch) {
        dispatch(requestPosts(loginState))
        if (id == '' || password ==''){
            alert('아이디와 패스워드를 입력해주세요')
            return
        }
        return fetch('http://localhost:1337/user?id='+id+'&password='+password,{
            method:'get'
        }).then(response =>{
            return response.json()
        }).then(json => {
            dispatch(receivePosts(loginState,json))
        }).catch(err =>{
            console.log(err)
            alert('아이디 비밀번호를 확인하세요')
        })
    }
}
//모든 유저에대한 정보를 가져옴
export function usersFetch() {
    return function (dispatch) {
        dispatch(requestUsers())
        return fetch('http://localhost:1337/users', {
            method:'get'
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log('json - ',json)
            dispatch(receiveUsers(json))
        }).catch(err => {
            console.log(err)
        })
    }

}
//store-userById에서 id와 비밀번호 확인
export function getUser(id, password) {
    return (dispatch, getState) => {
        console.log(getState())
        dispatch(requestLogin())
        var loginFlag = false
        for (var i in getState().usersById.users){
            var data = getState().usersById.users[i]
            console.log(data.id)
            if (id == data.id && password == data.password){
                dispatch(receiveLogin(2, {
                    id:data.id,
                    password:data.password,
                    phone:data.phone,
                    userName:data.userName
                }))
                loginFlag = true
                break
            }
        }
        if (!loginFlag){
            alert('아이디 비밀번호를 확인해주세요')
        }
    }
}