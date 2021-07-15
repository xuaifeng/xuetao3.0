import React from 'react'

import {
    CateMenuWrap
} from '../js/StyledContainer'

import { GET } from '@/utils/http'

const dataList = [
    {'id': 1, 'title': '北大校花', 'children': [ {'id': 101, 'title': '北大校花'}, {'id': 102, 'title': '北大女神'}, {'id': 103, 'title': '北大系花'}, {'id': 104, 'title': '北大美人'} ]},
    {'id': 2, 'title': '清华校花', 'children': [ {'id': 201, 'title': '清华校花'}, {'id': 202, 'title': '清华女神'} ]},
    {'id': 3, 'title': '上交大校花', 'children': [ {'id': 301, 'title': '交大校花'}, {'id': 302, 'title': '交大女神'}  ]},
]

export default class CateMenus extends React.Component {

    state = {
        curCate: 1,
        cateList: [],
    }

    async componentDidMount () {
        let result = await GET({
            url: '/api/ucenter/system/queryCity?code=010101'
        }) 
        // console.log(result);
        this.setState({
            cateList : result.data.data
        })
    }

    handleCateClick = (cid)=> {
      return ( this.setState({curCate: cid}) )
    }

    queryCategory = (crid) => {
        
    }

    render() {
        let { cateList, curCate } = this.state
        cateList = dataList
        return (
            <CateMenuWrap>
                <aside>
                    <ul>
                        {
                            // cateList && Object.keys(cate['id']).map(val => {
                            cateList && cateList.map(val => {
                                return (
                                    <li key={val.id}
                                        onClick={() => this.handleCateClick(val.id)}
                                        className={curCate === val.id?'active':''}>
                                        <span>{val.title}</span>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </aside>
                <section>
                    <ul>
                        {
                          // eslint-disable-next-line
                          cateList && cateList.map(val => {
                            if(val.id === curCate) {
                              return (
                                val.children && val.children.map(child => {
                                  // console.log('child (3) === > ', child);
                                  return (
                                    <li key={child.id}
                                      onClick={() => console.log('跳转到', child.title) }>
                                      <span style={{ backgroundColor: '#eee', padding: '.6rem', borderRadius: '.3rem'}}>{child.title}</span>
                                    </li>
                                  )
                                })
                              )
                            }
                          })
                        }
                    </ul>
                </section>
            </CateMenuWrap>
        )
    }
}