import React from 'react';

class Image extends React.Component{
    render(){
        return (
            <button className="image" onClick={this.props.updateState}></button>
        );
    }
}

export default Image;