import React from 'react'
import { connect } from 'react-redux'
import TianHomeUi from '../uiconent/TianHomeUi'

import { loadDataAsync } from '../actionCreator'

@connect(
  (state) => {
    return {
      list: state.tianHome.list,
      data: state.tianHome.data
    }
  },
  (dispatch) => ({
    loadData(){
      dispatch(loadDataAsync())
    }
  })
)
class TianCaiHome extends React.Component {
  
  componentDidMount() {
    /** 
     * 1. 调用 装饰器 connect 的 方法 loadData 事件派发
     * 2. 加载数据
     */
    this.props.loadData()
  }

  componentDidUpdate() {
    // console.log(this.props.data);
  }

  render () {
    const { data , list } = this.props 
    return (
      <TianHomeUi list={list} data={data}></TianHomeUi>
    );
  }
}
export default TianCaiHome