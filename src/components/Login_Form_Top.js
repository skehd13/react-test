import React from 'react';
import {connect} from 'react-redux'
import {loginFetch, insertFetchPosts, login_out} from "../redux/action"

class Login_Form_Top extends React.Component{

    constructor(props){
        super(props)

        this.insert = this.insert.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    //회원가입
    insert(event){
        event.preventDefault()
        this.props.Add_User(1, this.id.value, this.password.value, this.phone.value, this.userName.value)
        this.render()
    }

    //로그인
    login(event){
        event.preventDefault()
        this.props.Login(2, this.id.value, this.password.value)
        this.render()
    }

    //로그아웃
    logout(event){
        event.preventDefault()
        this.props.Logout(0)
        this.render()
    }

    render(){
        switch (this.props.LoginState){
            case 0:
                return (
                    <div className="login_form">
                        <h1>INSTAGRAM</h1>
                        <div>
                            <form onSubmit={this.insert} className="form">
                                <h2 className="form_h2">친구들의 사진과 동영상을 보려면 가입하세요</h2>
                                <span className="form_span"><button className="form_button">FACEBOOK으로 로그인</button></span>
                                <div className="form_or">
                                    <div className="form_highline"></div>
                                    <div className="or_or">또는</div>
                                    <div className="form_highline"></div>
                                </div>
                                <div className="form_input_text_div"><input ref={(ref) => {this.phone = ref}} type="text" name="phone" id="input_phone"
                                                                            className="form_input_text"
                                                                            placeholder="휴대폰 번호 또는 이메일 주소"/></div>
                                <div className="form_input_text_div"><input ref={(ref) => {this.userName = ref}} type="text" name="userName" id="input_name"
                                                                            className="form_input_text" placeholder="성명"/>
                                </div>
                                <div className="form_input_text_div"><input ref={(ref) => {this.id = ref}} type="text" name="id"
                                                                            className="form_input_text"
                                                                            placeholder="사용자 이름"/></div>
                                <div className="form_input_text_div"><input ref={(ref) => {this.password = ref}} type="password" name="password"
                                                                            className="form_input_text" placeholder="비밀번호"/>
                                </div>
                                <span className="form_span"><button className="form_button" >가입</button></span>
                                <p className="form_p">가입하시면 Instagram의 <a href="">약관</a> 및 <a href="">개인정보 처리방침</a>에 동의하게
                                    됩니다</p>
                            </form>
                        </div>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className="login_form">
                        <h1>INSTAGRAM</h1>
                        <div>
                            <form onSubmit={this.login} className="form">
                                <h2 className="form_h2">사용자 이름과 비밀번호를 입력하세요</h2>
                                <div className="form_input_text_div">
                                    <input ref={(ref) => {this.id = ref}} type="text" className="form_input_text" name="id" defaultValue={this.props.Id} placeholder="사용자 이름"/>
                                </div>
                                <div className="form_input_text_div">
                                    <input ref={(ref) => {this.password = ref}} type="password" className="form_input_text" name="password" placeholder="비밀번호"/>
                                </div>
                                <span className="form_span"><button className="form_button">로그인</button></span>
                            </form>
                        </div>
                    </div>
                );
                break;
            default:
                return(
                    <div className="login_form">
                        <h1>INSTAGRAM</h1>
                        <div>
                            <form onSubmit={this.logout} className="form">
                                <h2 className="form_h2">{this.props.UserName} 로그인을 환영합니다</h2>
                                <h2 className="form_h2">id : {this.props.Id}</h2>
                                <h2 className="form_h2">phone : {this.props.Phone}</h2>
                                <span className="form_span"><button className="form_button">로그아웃</button></span>
                            </form>
                        </div>
                    </div>
                );
                break;
        }
    }
}

let mapDispatchToProp = (dispatch) =>{
    return{
        Logout:(loginState)=>dispatch(login_out(loginState)),
        Login:(loginState, id, password) => dispatch(loginFetch(loginState,id, password)),
        Add_User:(loginState, id, password, phone, userName) => dispatch(insertFetchPosts(loginState, id, password, phone, userName))
    }
}

let mapStateToProps = (state) =>{
    return{
        Id:state.fetch.id,
        Password:state.fetch.password,
        Phone:state.fetch.phone,
        UserName:state.fetch.userName,
        LoginState:state.fetch.loginState
    }
}
Login_Form_Top = connect(mapStateToProps, mapDispatchToProp)(Login_Form_Top)

export default Login_Form_Top;