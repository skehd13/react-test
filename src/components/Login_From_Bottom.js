import React from 'react';

class Login_From_Bottom extends React.Component{
    constructor(props){
        super(props)
        this.loginClick = this.loginClick.bind(this)
    }
    loginClick(){
        this.props.setLoginState(1)
        this.render()
    }
    render(){
        switch (this.props.loginState){
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

export default Login_From_Bottom;