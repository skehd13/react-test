import React from 'react';
import Image from './Image';
import Right_Form from './Right_Form';
import Footer from './Footer';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            footer1:"Instagram 정보",
            footer2:"지원"
        }
    }
    render(){

        return (
            <section>
                <main>
                    <article>
                        <Image />
                        <Right_Form />
                    </article>
                </main>
                <Footer footer1={this.state.footer1}
                        footer2={this.state.footer2}/>
            </section>
        );
    }
}

export default App;