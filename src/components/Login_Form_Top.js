import React from 'react';

class Login_Form_Top extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            // login:0,
            id:'',
            password:'',
            phone:'',
            userName:''
        }
        this.insert = this.insert.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    //회원가입
    insert(event){
        event.preventDefault();
        console.log(this.id.value, this.phone.value, this.userName.value)
        if (this.id.value == '' || this.password.value =='' || this.userName.value =='' || this.phone.value == ''){
            alert('모든정보를 입력해주세요')
            return
        }
        fetch('http://localhost:1337/user',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                id:this.id.value,
                password:this.password.value,
                phone:this.phone.value,
                userName:this.userName.value
            })
        }).then(response => {
            if (response.status == 200){
                console.log(response.status)
                console.log("insert OK")
                this.props.setLoginState(1)
                // this.setState({
                //     login:1
                // })
                this.render()
            }else {
                console.log('error - ',response.status)
                alert('이미 존재하는 아이디입니다')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    //로그인
    login(event){
        event.preventDefault()
        var data
        console.log(this.id.value)
        if (this.id.value == '' || this.password.value ==''){
            alert('아이디와 패스워드를 입력해주세요')
            return
        }
        fetch('http://localhost:1337/user?id='+this.id.value+'&password='+this.password.value,{
            method:'get'
        }).then(function (response) {
            return response.json()
        }).then(responseData => {
            console.log(JSON.stringify(responseData))
            data = JSON.parse(JSON.stringify(responseData))

            this.setState({
                id:data.id,
                password:data.password,
                phone:data.phone,
                userName:data.userName
                // login:2
            })
            this.props.setLoginState(2)
            this.render()
        }).catch(err=>{
            console.log(err)
            alert('아이디 비밀번호를 확인해주세요')
        })
    }
    //로그아웃
    logout(event){
        event.preventDefault()
        this.setState({
            id:'',
            password:'',
            phone:'',
            userName:''
            // login:0
        })
        this.props.setLoginState(0)
        this.render()
    }
    render(){
        switch (this.props.loginState){
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
                                <span className="form_span"><button className="form_button">가입</button></span>
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
                                    <input ref={(ref) => {this.id = ref}} type="text" className="form_input_text" name="id" placeholder="사용자 이름"/>
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
                                <h2 className="form_h2">{this.state.userName} 로그인을 환영합니다</h2>
                                <h2 className="form_h2">id : {this.state.id}</h2>
                                <h2 className="form_h2">phone : {this.state.phone}</h2>
                                <span className="form_span"><button className="form_button">로그아웃</button></span>
                            </form>
                        </div>
                    </div>
                );
                break;
        }
    }
}

export default Login_Form_Top;