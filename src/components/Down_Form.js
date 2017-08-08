import React from 'react';

class Down_Form extends React.Component{
    render(){
        return(
            <div className="down_form">
                <p>앱을 다운로드하세요</p>
                <div className="down_icon">
                    <a href=""><img src="./appstore.png" alt/></a>
                    <a href=""><img src="./googleplay.png" alt=""/></a>
                </div>
            </div>
        );
    }
}
export default Down_Form;