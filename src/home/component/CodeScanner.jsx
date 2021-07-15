import React from 'react'
import { withRouter } from 'react-router-dom'
import {  Card, Modal, List, 
          Button, NavBar, Icon,
          NoticeBar  } from 'antd-mobile'
/** -- 导入组件 -- **/
import CustIcon from '@/component/CustIcon'
/** -- 导入样式 -- **/
import '@/assets/css/tian-hd.css'

/** -- 导入图片 -- **/ 
import codeQr01 from '@assets/images/qrcode_05.png'
import headCard from '@assets/images/mv05.jpg'

@withRouter
class CodeScanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fullScreen: true,
      visible: true,
      selected: '',
    };
  }

  goBack = () => { let { history } = this.props;  history.goBack() }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({ [key]: true });
  }

  onClose = key => () => { this.setState({ [key]: false, });  }

  onSelect = (opt) => { this.setState({ visible: false,  selected: opt.props.value, });  };

  render(){
    console.log("code scan =>", this.props)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <div className="tc-cs-body">
          <div className="tc-cs-hd">
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
              rightContent={[
                <Icon key="1" type="ellipsis" onClick={this.showModal('modal')} />,
              ]} >我的二维码</NavBar>
          </div>
          <div className="tc-cs-content">
            <NoticeBar mode="closable" marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
              通知: 近期有不法分子冒充公安法院工作人员进行诈骗 &#39; 请广大市民朋友注意保管好自身的个人财产五要泄露给陌生人.
            </NoticeBar>
            <Card full>
              <Card.Header
                title="天明"
                thumb={ <CustIcon width={52} url={headCard} borderRadius='25px' marginRight={10} /> }
              />
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                  <img src={codeQr01} alt="1" style={{height:'100%', width: '80%'}}/>
                </div>
              </Card.Body>
              <Card.Footer content="个人名片，请勿外传" />
            </Card>
            <Modal popup title="个性设置" transparent animationType="slide-up"
              visible={this.state.modal}
              onClose={this.onClose('modal')}
              afterClose={() => { console.log('afterClose'); }} >
              <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                  <List.Item key={index}>{i}</List.Item>
                ))}
                <List.Item>
                  <Button type="primary" onClick={this.onClose('modal')}>买入</Button>
                </List.Item>
              </List>
            </Modal>
          </div>
        </div>
      </div>  
    );
  }
}
export default CodeScanner