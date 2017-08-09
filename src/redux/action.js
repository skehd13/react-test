export const LOGIN_OUT = 'LOGIN_OUT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function login_out(value) {
    return{
        type:LOGIN_OUT,
        loginState:value
    }
}

function requestPosts(reddit) {
    return{
        type:REQUEST_POSTS,
        reddit
    }
}

function receivePosts(reddit, json) {
    return{
        type:RECEIVE_POSTS,
        reddit,
        info:json
    }
}

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
            }else {
                alert('이미있는 아이디입니다')
            }
        }).catch(err =>{
            console.log(err)
        })
    }
}

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