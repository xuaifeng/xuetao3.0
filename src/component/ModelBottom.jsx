import React from 'react'
import { Modal, List, 
  Button, InputItem } from 'antd-mobile';

class ModelBoottom extends React.Component {
  
  onClose = key => () => { 
    this.setState({ GoodFoot : false });
    this.setState({ GoodDetail: false });
    if (this.state.hasError) { Toast.info('请输入正确手机号'); }
  }

  render(){
    return (
      <div>
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
export default ModelBoottom