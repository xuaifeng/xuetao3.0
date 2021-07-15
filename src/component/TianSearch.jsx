import React from 'react';
import { SearchBar } from 'antd-mobile';
import '@assets/css/tian-web.css';

class TianSearch extends React.Component {
  render () {
    return (
      <div className='tian-h-search'>
        <SearchBar defaultValue="那你" maxLength="100" placeholder="输入搜索商品名称/关键词"/>
      </div>
    );
  }
}
export default TianSearch;