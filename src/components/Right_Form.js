import React from 'react';
import Login_Form_Top from './Login_Form_Top';
import Login_From_Bottom from './Login_From_Bottom';
import Down_Form from './Down_Form';

class Right_Form extends React.Component{
    render(){
        return(
            <div className="rigth_form">
                <Login_Form_Top phone={this.props.phoneValue}
                                name={this.props.nameValue}
                                footerChange1={this.props.footerChange1}
                                footerChange2={this.props.footerChange2}
                                nameChange={this.props.nameChange}
                                phoneChange={this.props.phoneChange}/>
                <Login_From_Bottom/>
                <Down_Form/>
            </div>
        );
    }
}

export default Right_Form;