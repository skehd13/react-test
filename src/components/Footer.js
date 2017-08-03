import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div>
                    <nav className="footer_nav">
                        <ul className="footer_ul">
                            <li><a href="">{this.props.footer1}</a></li>
                            <li><a href="">{this.props.footer2}</a></li>
                            <li><a href="">블로그</a></li>
                            <li><a href="">홍보센터</a></li>
                            <li><a href="">API</a></li>
                            <li><a href="">채용정보</a></li>
                            <li><a href="">개인정보처리방침</a></li>
                            <li><a href="">약관</a></li>
                            <li><a href="">디렉터리</a></li>
                            <li><a href="">언어</a></li>
                        </ul>
                    </nav>
                    <span className="footer_span">&copy; 2017 INSTAGRAM</span>
                </div>
            </footer>
        );
    }
}

export default Footer;