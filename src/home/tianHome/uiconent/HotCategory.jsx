import React from 'react';
import { Grid, 
  Toast, Modal, List, 
  Button, InputItem } from 'antd-mobile';
import CustIcon from '@/component/CustIcon';

import '@assets/css/tian-web.css';

import img1 from '@assets/images/mv.jpg';
import img2 from '@assets/images/mv-1.jpg';
import mv03 from '@assets/images/mv-003.jpg';
import img3 from '@assets/images/mvtx-2.jpg';
import mv05 from '@assets/images/mv-005.jpg';
import mv06 from '@assets/images/mv-006.jpg';

import TianCaiHotCate from '@assets/images/icon_hotcate.svg';
import IconMore from '@assets/images/icon_more_small.svg';

class HotCategory extends React.Component {

  state = {
    items : [
      {icon: img1, title: '清华美女1', mleft: false},
      {icon: img2, title: '北大美女1', mleft: true},
      {icon: img3, title: '上海交大', mleft: false},
      {icon: img1, title: '北航美女1', mleft: true},
      {icon: mv03, title: '河农大美女1', mleft: false},
      {icon: mv05, title: '南大学霸', mleft: true},
      {icon: mv06, title: '郑大学姐', mleft: false},
      {icon: IconMore, title: "更多", mleft: true, last: true},
    ],
    GoodDetail: false,
    GoodContent: '',
    GoodFoot: false,
    hasError: false,
    value: '',
    columnNum: ''
  }

  GoodClick = (item, index) => {
    // console.log(item, index);
    // e.preventDefault(); // 修复 Android 上点击穿透
    // Toast.success(item.title, 1);
    this.setState({ GoodFoot : true });
    this.setState({ GoodDetail : true });
    this.setState({ GoodContent: item.title })
  }

  onClose = key => () => { 
    this.setState({ GoodFoot : false });
    this.setState({ GoodDetail: false });
    if (this.state.hasError) { Toast.info('请输入正确手机号'); }
  }

  submitPay = () => {
    console.log("支付");
    this.setState({ GoodFoot : false });
    this.setState({ GoodDetail: false });
    if (this.state.hasError) { Toast.info('请输入正确手机号'); }
  }

  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({ hasError: true, });
    } else {
      this.setState({ hasError: false,  });
    }
    this.setState({ value, });
  }
  
  /** TODO 有问题，后面解决 */
  componentDidMount(){
    let width = window.innerWidth
    if (width <= 375) {
      this.setState((state)=> ({  columnNum: 3  }));
    }
  }

  render () {
    let { columnNum } = this.state.columnNum
    columnNum = columnNum ? columnNum : 4
    console.log("render columnNum -> ", columnNum);
    return (
      <div className="hot-cate">
        <h1 className='hot-cate-h1'>
          <CustIcon width={25} url={TianCaiHotCate}/>
          <span style={{ paddingLeft: 3, fontSize: 16 }}>热门分类</span>
        </h1>
        <div className='cate-title'>
          <Grid data={this.state.items} columnNum={columnNum} hasLine={false}
            onClick={(itm, index) => this.GoodClick(itm, index)}
            renderItem={item => (
              <div className={item.last ? 'cate-grid' : ''}> 
                <img src={item.icon} alt={item.title} style={{ borderRadius: 12, paddingLeft: 10, paddingRight: 10}}/>
                <div className='img-title'>{item.title}</div>
              </div>
            )}
          />
        </div>
        <Modal title="详情" visible={this.state.GoodDetail} transparent
          onClose={this.onClose('GoodDetail')} maskClosable={false} // 点击 区域外关闭弹窗
          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('GoodDetail')(); } }]}>
          <div style={{ height: 100, overflow: 'scroll' }}> {this.state.GoodContent} </div>
        </Modal>
        <Modal popup visible={this.state.GoodFoot} animationType="slide-up"
          onClose={this.onClose('GoodFoot')} maskClosable={true} >
          <List renderHeader={() => <div>用户付款</div>} className="popup-list">
            <List.Item>
              <InputItem type="phone"
                error={this.state.hasError}
                onChange={this.onChange}
                value={this.state.value}
                placeholder="188 0000 0001" >手机号码</InputItem>
              <InputItem type="bankCard" placeholder='8888 8888 8888 8888'>银行卡号</InputItem>
              <InputItem type="password" placeholder="支付密码">支付密码</InputItem>
            </List.Item>
            <List.Item>
              <Button type="primary" onClick={()=> this.submitPay()}>确认付款</Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    );
  }
}
export default HotCategory