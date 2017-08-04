import React from 'react';

class Login_Form_Top extends React.Component{
    update(){
        this.state.phoneValue = document.getElementById('input_phone').value
        this.state.nameValue = document.getElementById('input_name').value

        this.props.footerChange1(this.state.phoneValue)
        this.props.footerChange2(this.state.nameValue)
        this.props.nameChange(this.state.nameValue)
        this.props.phoneChange(this.state.phoneValue)
    }
    constructor(props){
        super(props);
        this.state= {
            nameValue:this.props.name,
            phoneValue:this.props.phone
        }

        this.update = this.update.bind(this);

    }
    render(){
        return (
            <div className="login_form">
                <h1>INSTAGRAM</h1>
                <div>
                    <form action="http://localhost:1337/insert" className="form">
                        <h2 className="form_h2">친구들의 사진과 동영상을 보려면 가입하세요</h2>
                        <span className="form_span"><button className="form_button">FACEBOOK으로 로그인</button></span>
                        <div className="form_or">
                            <div className="form_highline"></div>
                            <div className="or_or">또는</div>
                            <div className="form_highline"></div>
                        </div>
                        <div className="form_input_text_div"><input type="text" name="phone" id="input_phone" className="form_input_text" placeholder="휴대폰 번호 또는 이메일 주소"/></div>
                        <div className="form_input_text_div"><input type="text" name="userName" id="input_name" className="form_input_text" placeholder="성명"/></div>
                        <div className="form_input_text_div"><input type="text" name="id" className="form_input_text" placeholder="사용자 이름" /></div>
                        <div className="form_input_text_div"><input type="password" name="password" className="form_input_text" placeholder="비밀번호" /></div>
                        <span className="form_span"><button className="form_button">가입</button></span>
                        <p className="form_p">가입하시면 Instagram의 <a href="">약관</a> 및 <a href="">개인정보 처리방침</a>에 동의하게 됩니다</p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login_Form_Top;