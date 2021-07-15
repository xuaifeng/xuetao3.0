import React from 'react';
import { SearchBar } from 'antd-mobile';
import '@assets/css/tian-web.css';

class TianSearchH extends React.Component {
  
  onSubmit = (value) => {
    alert(value)
    console.log("提交查询-->", value);
  }

  onCancel = (value) => {
    alert(value)
    console.log("取消实现搜索-->", value);
  }

  render () {
    return (
      <div className='tian-h-search'>
        <SearchBar defaultValue=""
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onChange={this.onChange}
          cancelText="搜索"
          onCancel={(value) => this.onCancel(value)}
          onSubmit={value=> { this.onSubmit(value) }}
          maxLength="100" 
          showCancelButton={true} 
          placeholder="输入搜索商品名称"/>
      </div>
    );
  }
}
export default TianSearchH