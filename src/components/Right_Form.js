import React from 'react';
import Login_Form_Top from './Login_Form_Top';
import Login_From_Bottom from './Login_From_Bottom';
import Down_Form from './Down_Form';

class Right_Form extends React.Component{
    render(){
        return(
            <div className="rigth_form">
                <Login_Form_Top/>
                <Login_From_Bottom/>
                <Down_Form/>
            </div>
        );
    }
}

export default Right_Form;