import React from 'react';
import Image from './Image';
import Right_Form from './Right_Form';
import Footer from './Footer';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nameValue : "Dongk",
            phoneValue: "01000000000",
            footer1:"Instagram 정보",
            footer2:"지원"
        }

        this.footerChange1 = this.footerChange1.bind(this);
        this.footerChange2 = this.footerChange2.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
    }

    footerChange1(phone){
        if (phone == ""){
            this.setState({
                footer1:"Instagram 정보"
            })
        }else {
            this.setState({
                footer1: phone
            })
        }
    }
    footerChange2(name){
        if (name == ""){
            this.setState({
                footer2:"지원"
            })
        }else {
            this.setState({
                footer2: name
            })
        }
    }
    nameChange(name){
        this.setState({
            nameValue:name
        })
    }
    phoneChange(phone){
        this.setState({
            phoneValue:phone
        })
    }
    updateState(){
        if (this.state.nameValue == "Dongk") {
            this.setState({
                nameValue: "Hello",
                phoneValue: "01011111111"
            })
        }else {
            this.setState({
                nameValue:"Dongk",
                phoneValue:"01000000000"
            })
        }
    }
    render(){

        return (
            <section>
                <main>
                    <article>
                        <Image updateState={this.updateState.bind(this)}/>
                        <Right_Form nameValue={this.state.nameValue}
                                    phoneValue={this.state.phoneValue}
                                    footerChange1={this.footerChange1}
                                    footerChange2={this.footerChange2}
                                    nameChange={this.nameChange}
                                    phoneChange={this.phoneChange}/>
                    </article>
                </main>
                <Footer footer1={this.state.footer1}
                        footer2={this.state.footer2}/>
            </section>
        );
    }
}

export default App;