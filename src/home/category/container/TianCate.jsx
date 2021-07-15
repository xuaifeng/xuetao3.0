import React from 'react'
import CateMenus from './CateMenus'
import TianSearch from '@/component/TianSearch'
import {
    CategoryWrap
} from '../js/StyledContainer'

export default class TianCate extends React.Component {
    state = {
        tabIndex: 0
    }
    handleClick = (index) => {
        /** 传参数才需要返回 */
        return () => {
            this.setState({tabIndex: index})
        }
    }
    render() {
        const tabIndex = this.state.tabIndex
        return (
            <CategoryWrap>
                <nav>
                    <ul>
                        <li onClick={this.handleClick(0)} className={tabIndex === 0? 'active':''}>分类</li>
                        <li onClick={this.handleClick(1)}className={tabIndex === 1? 'active':''} >猎艳</li>
                        <li className={tabIndex === 0? 'slide':'slide right'}></li>
                    </ul>
                </nav>
                <div className='cate-search'><TianSearch/> </div>
                <CateMenus/>
            </CategoryWrap>
        )
    }
}