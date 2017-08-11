export const LOGIN_OUT = 'LOGIN_OUT'
export const REQUEST_ADD = 'REQUEST_ADD'
export const RECEIVE_ADD = 'RECEIVE_ADD'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
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
function requestAdd(loginState) {
    return{
        type:REQUEST_ADD,
        loginState
    }
}
//회원가입완료
function receiveAdd(loginState, json) {
    return{
        type:RECEIVE_ADD,
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
function receiveUsers(id, json) {
    return{
        type:RECEIVE_USERS,
        id,
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
function receiveLogin(loginState, users, loginID) {
    return{
        type:RECEIVE_LOGIN,
        loginState,
        users,
        loginID
    }
}
//회원가입
export function insertFetchPosts(loginState, info) {
    return function (dispatch) {
        dispatch(requestAdd(loginState))
        if (info.id == '' || info.password =='' || info.userName =='' || info.phone == ''){
            alert('모든정보를 입력해주세요')
            return
        }
        const insertData = JSON.stringify({
            id:info.id,
            password:info.password,
            phone:info.phone,
            userName:info.userName
        })
        return fetch('http://localhost:1337/user',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:insertData
        }).then(response => {
            if (response.ok) {
                dispatch(receiveAdd(loginState, JSON.parse(insertData)))
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
        dispatch(requestLogin(loginState))
        if (id == '' || password ==''){
            alert('아이디와 패스워드를 입력해주세요')
            return
        }
        return fetch('http://localhost:1337/user?id='+id+'&password='+password,{
            method:'get'
        }).then(response =>{
            return response.json()
        }).then(json => {
            dispatch(receiveLogin(loginState,json))
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
            console.log(response)
            return response.json()
        }).then(json => {
            console.log('json data - ',json)
            // dispatch(receiveUsers(json))
            json.map(index => {
                return dispatch(receiveUsers(index.id, {
                    id:index.id,
                    password:index.password,
                    phone:index.phone,
                    userName:index.userName,
                    isLogin:false
                }))
            })
        }).catch(err => {
            console.log(err)
        })
    }

}
//store-userById에서 id와 비밀번호 확인
export function getUser(id, password) {
    return (dispatch, getState) => {
        dispatch(requestLogin())
        console.log('state',getState().userById)
        //아이디 비밀번호 확인
        if (getState().userById[id] != null && id == getState().userById[id].id && password == getState().userById[id].password) {
            console.log('get User - ',getState().userById[id].id)
            var data = getState().userById[id]
            dispatch(receiveLogin(2, {
                id: data.id,
                password: data.password,
                phone: data.phone,
                userName: data.userName,
                isLogin: true
            }, id))
        }else {
            alert('아이디 비밀번호를 확인해주세요')
        }
    }
}