import React from 'react'

class TouchContentView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const title = this.props.title
        return(
            <content className={this.indexCheck() ? "content slide-in" : " content slide-out"}  >
                <img src={this.props.img} className="main_image"/>
                <div className={title.length > 5 ?
                    title.length >8 ? "main_title_long" : "main_title_middle"
                    :"main_title_short"}>{title}</div>
                <div className="main_desc">{this.props.desc}</div>
                <div className="main_price_image">
                    <div className="main_price_text">{this.props.price}</div>
                </div>
                <div className="main_info">※상기 이미지는 실제와 다를 수 있습니다.</div>
            </content>
        )
    }
    indexCheck(){
        if (this.props.nowIndex == this.props.changeIndex){
            return true
        }else {
            return false
        }
    }
}

export default TouchContentView