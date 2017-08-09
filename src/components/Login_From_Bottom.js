import React from 'react';
import {connect} from 'react-redux'
import {login_out} from "../redux/action";

class Login_From_Bottom extends React.Component{
    constructor(props){
        super(props)
        this.loginClick = this.loginClick.bind(this)
    }
    loginClick(){
        this.props.Login_out(1)
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
        LoginState:state.fetch.loginState
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        Login_out:(value)=>dispatch(login_out(value))
    }
}
Login_From_Bottom = connect(mapStateToProps, mapDispatchToProps)(Login_From_Bottom)
export default Login_From_Bottom;