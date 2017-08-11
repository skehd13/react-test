import React from 'react';
import {connect} from 'react-redux'
import {login_out, usersFetch} from "../redux/action";

class Login_From_Bottom extends React.Component{
    constructor(props){
        super(props)
        this.loginClick = this.loginClick.bind(this)
    }
    loginClick(){
        this.props.Login_out(1)
        this.props.UserFetch()
        console.log('State - ', this.props.State)
        console.log('Login ID - ', this.props.LoginID)
        console.log('Login User - ', this.props.LoginUser)
        this.render()
    }
    render(){
        switch (this.props.LoginState){
            case 0:
                return(
                    <div className="login_form">
                        <p>계정이 있으신가요? <a onClick={this.loginClick}>로그인</a></p>
                    </div>
                );
                break
            default:
                return(<div></div>)
                break
        }
    }
}

let mapStateToProps = (state) =>{
    return{
        LoginState:state.userById.loginState,
        LoginID:state.userById.loginID,
        LoginUser:state.userById[state.userById.loginID],
        State:state
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        Login_out:(value)=>dispatch(login_out(value)),
        UserFetch:() => dispatch(usersFetch())
    }
}
Login_From_Bottom = connect(mapStateToProps, mapDispatchToProps)(Login_From_Bottom)
export default Login_From_Bottom;