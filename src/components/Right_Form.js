import React from 'react';
import Login_Form_Top from './Login_Form_Top';
import Login_From_Bottom from './Login_From_Bottom';
import Down_Form from './Down_Form';

class Right_Form extends React.Component{
    // constructor(props){
    //     super(props)
    //
    //     this.state = {
    //         login:0,
    //         id:'',
    //         password:'',
    //         phone:'',
    //         userName:''
    //     }
    //     this.insert = this.insert.bind(this)
    //     this.login = this.login.bind(this)
    //     this.logout = this.logout.bind(this)
    // }
    // //회원가입
    // insert(event){
    //     event.preventDefault();
    //     console.log(this.id.value,this.password.value, this.phone.value, this.userName.value)
    //     fetch('http://localhost:1337/user',{
    //         method:'post',
    //         headers: {'Content-Type':'application/json'},
    //         body:JSON.stringify({
    //             id:this.id.value,
    //             password:this.password.value,
    //             phone:this.phone.value,
    //             userName:this.userName.value
    //         })
    //     }).then(response => {
    //         console.log(response)
    //         console.log("insert OK")
    //         this.setState({
    //             login:1
    //         })
    //         this.render()
    //     })
    // }
    // //로그인
    // login(event){
    //     event.preventDefault()
    //     var data
    //     console.log(this.id.value, this.password.value)
    //     fetch('http://localhost:1337/user?id='+this.id.value+'&password='+this.password.value,{
    //         method:'get'
    //     }).then(function (response) {
    //         if (response.ok) {
    //             console.log(response)
    //             return response.json()
    //         }else {
    //             return 'error'
    //         }
    //     }).then(responseData => {
    //         console.log(JSON.stringify(responseData))
    //         data = JSON.parse(JSON.stringify(responseData))
    //
    //         this.setState({
    //             id:data.id,
    //             password:data.password,
    //             phone:data.phone,
    //             userName:data.userName,
    //             login:2
    //         })
    //         this.render()
    //     })
    // }
    // //로그아웃
    // logout(event){
    //     event.preventDefault()
    //     this.setState({
    //         id:'',
    //         password:'',
    //         phone:'',
    //         userName:'',
    //         login:0
    //     })
    //     this.render()
    // }
    render(){
        return(
            <div className="rigth_form">
                <Login_Form_Top
                    // phone={this.state.phone}
                    // userName={this.state.userName}
                    // id={this.state.id}
                    // password={this.state.password}
                    // loginState={this.state.login}
                    // login={this.login}
                    // insert={this.insert}
                    // logout={this.logout}
                />
                <Login_From_Bottom/>
                <Down_Form/>
            </div>
        );
    }
}

export default Right_Form;