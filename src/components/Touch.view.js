import React from 'react'
import TouchContentView from './Touch.content.view'
import TouchAsideView from './Touch.aside.view'

class TouchView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index:0,
            title:['가케소바', '가츠동', '돈까스 우동정식', '참치회덮밥', '우삼겹츠케맨'],
            price:['7500', '9000', '9000', '11000', '9000'],
            desc:['깊고 진한 가쓰오 국물에 세가지 버섯을 넣어 씹는 맛이 살아있는 일본식 소바',
                '따뜻하고 부드러운 계란이 두툼한 돈까스를 감싸안은 돈까스 덮밥',
                '언제 먹어도 맛있는 돈까스와 쫄깃탱글한 우동을 함께 먹을 수 있는 실속 세트메뉴',
                '새콤달콤 초고추장소스가 입맛을 돋우는 본가스시 베스트 셀러 참치회덮밥',
                '담백한 우삼겹과 아삭한 숙주를 특제소스에 적셔 바삭한 김에 싸먹는 색다른 메뉴'],
            img:['/img/layer-42.png', 'img/curves-1-copy.png', 'img/dsc-0570-copy-3.png',
                'img/dsc-0588-copy-3.png', 'img/dsc-0595-copy-3.png']
        }
        this.selectMenu = this.selectMenu.bind(this)
    }
    selectMenu(index){
        this.setState({
            index
        })
    }
    render(){
        const contentViews = this.state.title.map((title, index) => (
            <TouchContentView key={index} title={title} price={this.state.price[index]}
                                nowIndex={index} desc={this.state.desc[index]} img = {this.state.img[index]}
                                changeIndex={this.state.index}/>
        ))
        return(
            <main className="main">
                {contentViews}
                {/*<TouchContentView title={this.state.title} price={this.state.price}*/}
                                  {/*index={this.state.index} desc={this.state.desc}*/}
                                  {/*img={this.state.img}/>*/}
                <TouchAsideView selectMenu={this.selectMenu}
                title={this.state.title} price={this.state.price} index={this.state.index}/>
            </main>
        )
    }
}

export default TouchView