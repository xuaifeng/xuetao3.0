import React from 'react'
import { withRouter } from 'react-router-dom'
import CustIcon from '@/component/CustIcon'
import { Popover, NavBar, Icon } from 'antd-mobile';

/** -- 组件导入 -- **/
// import CodeScanner from './CodeScanner'
import TianSearch from '@/component/TianSearchH'

/** -- css导入 -- **/
import '@/assets/css/tian-hd.css'

/** --  js 导入  -- **/ 
import { TcHContainer1 as TcHContainerMain } from '../js/StyledHome'

/** -- 图片导入 -- **/
import TianCaiMore from '@assets/images/icon_more1.svg'
import TianCaiHome from '@assets/images/icon_home1.svg'

const Item = Popover.Item;

const myImg = src => 
    <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

@withRouter
class HomeHeader extends React.Component {
  state = {
    visible: false,
    selected: '',
  }

  onSelect = (opt) => {
    let { history } = this.props
    let value = opt.props.value
    console.log("点击跳转", value);
    this.setState({ visible: false,  selected: opt.props.value, });
    if(value == 2) {
      console.log(history);
      history.push({pathname: '/code/scanner', title: '我的扫码'})
    }
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  handleView = () => { this.setState({ visible: true}); }

  handleClick = () => {
    console.log("handle click => ", this.props);
    let { history } = this.props
    history.push({pathname: '/code/scanner', title: '我的扫码'})
  }

  render() {
    return (
      <TcHContainerMain>
        <header>
          {/* 主页头部首页 */}
          <div style={{ width: '12%', paddingLeft: '0.5rem'}} >
            <span onClick={()=> document.location.reload() }>
              <CustIcon width={22} url={TianCaiHome} />
            </span>
          </div>
          {/* 主页头部 搜索栏 */}
          <div style={{ width: '76%' }} className="tc-header-1 tc-hd-div-1"> <TianSearch/> </div>
          {/* 主页头部 更多 */}
          <div className="tc-home-more" 
            onClick={this.handleView  }
            style={{width: '12%',paddingRight: '0.5rem',display: 'flex',justifyContent: 'flex-end' }} >
            <span><CustIcon width={22} url={TianCaiMore} /></span>
          </div>
          <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="1" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                (<Item key="5" value="2" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} >我的二维码</Item>),
                (<Item key="6" value="3" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>帮助</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div className="tian-home-hd"></div>
            </Popover>
        </header>
      </TcHContainerMain>
    )
  }
}

export default HomeHeader