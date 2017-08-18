import React from 'react'

class TouchContentView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const title = this.props.title[this.props.index]
        return(
            <content className="content">
                {this.selectMenu(this.props.index)}
                <div className={title.length > 5 ?
                    title.length >8 ? "main_title_long" : "main_title_middle"
                    :"main_title_short"}>{title}</div>
                <div className="main_desc">{this.props.desc[this.props.index]}</div>
                {/*<img src="img/group-6.png" className="main_price_image"/>*/}
                <div className="main_price_image">
                    <div className="main_price_text">{this.props.price[this.props.index]}</div>
                </div>
                <div className="main_info">※상기 이미지는 실제와 다를 수 있습니다.</div>
            </content>
        )
    }
    selectMenu(index){
        return (
            <img src={this.props.img[index]} className="main_image"/>
        )
    }
}

export default TouchContentView