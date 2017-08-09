import React from 'react';
import Image from './Image';
import Right_Form from './Right_Form';
import Footer from './Footer';

class App extends React.Component {
    render(){

        return (
            <section>
                <main>
                    <article>
                        <Image />
                        <Right_Form/>
                    </article>
                </main>
                <Footer />
            </section>
        );
    }
}

export default App;