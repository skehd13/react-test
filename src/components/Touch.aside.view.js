import React from 'react'

class TouchAsideView extends React.Component{
    constructor(props){
        super(props)
        this.selectCheck = this.selectCheck.bind(this)
    }
    selectCheck(index){
        if (this.props.index == index){
            return true
        }else{
            return false
        }
    }
    menuClick(index){
        this.props.selectMenu(index)
    }
    render(){
        return(
            <aside className="aside">
                <div className="blank"></div>
                {this.menuRender()}
                <img className="aside_logo" src="img/vector-smart-object.png" />
            </aside>
        )
    }
    menuRender(){
        return this.props.title.map((menu, index) =>
            <div key={index} onClick={this.menuClick.bind(this, index)} className={this.selectCheck(index) ? "aside_list_item select_item" : "aside_list_item"}>
                <p className="aside_title">{menu}</p>
                <p className="aside_price">{this.props.price[index]}</p>
            </div>
        )
    }
}
export default TouchAsideView