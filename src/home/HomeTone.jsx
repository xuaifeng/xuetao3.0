import React from 'react';
import { TabBar } from 'antd-mobile';

import TianCai from '@assets/images/icon_cai_1.svg';
import TianCaiActived from '@assets/images/icon_cai_1_sd.svg';
import MineTab from '@assets/images/icon_mine.svg';
import MineTabActived from '@assets/images/icon_mine_sd.svg';
import TypesTab from '@assets/images/icon_types.svg';
import TypesTabActived from '@assets/images/icon_types_sd.svg';
import FindTab from '@assets/images/icon_find.svg';
import FindTabActived from '@assets/images/icon_find_sd.svg';
import BCarTab from '@assets/images/icon_bcar.svg';
import BCarTabActived from '@assets/images/icon_bcar_sd.svg';

import { TianCate } from '@/home/category';
import TianFind from '@/home/finder/TianFind';
import TianCars from '@/home/cars/TianCars';
import TianMine from '@/home/mine/TianMine';
import { TianCaiHome } from '@/home/tianHome';

class HomeTone extends React.Component {
  
  state = { selectedTab: 'tiancai', hidden: false, fullScreen: true, };

  render () {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={this.state.hidden}>
          <TabBar.Item key="tiancai"
            icon={<div style={{ width: '25px', height: '25px', background: `url(${TianCai}) center center /  38px 38px no-repeat` }}/>}
            selectedIcon={<div style={{ width: '25px', height: '25px', background: `url(${TianCaiActived}) center center /  38px 38px no-repeat` }} /> }
            selected={this.state.selectedTab === 'tiancai'}
            // badge={1}
            onPress={()=> {this.setState({selectedTab: 'tiancai', });}}
            data-seed="logId">
            <TianCaiHome />
          </TabBar.Item>
          <TabBar.Item title="分类" key="tianCate"
            icon={{uri: TypesTab}} selectedIcon={{uri: TypesTabActived}}
            selected={this.state.selectedTab === 'TypesTab'}
            onPress={() => { this.setState({ selectedTab: 'TypesTab', }); }}
            data-seed="logId1">
              <TianCate />
          </TabBar.Item>
          <TabBar.Item title="发现" key="FindTab" icon={{ uri: FindTab }} selectedIcon={{ uri: FindTabActived }}
            selected={this.state.selectedTab === 'FindTab'}
            onPress={() => { this.setState({ selectedTab: 'FindTab', }); }}
            data-seed="logId1">
            <TianFind/>
          </TabBar.Item>
          <TabBar.Item title="购物车" key="BCarTab" icon={{uri: BCarTab}} selectedIcon={{uri: BCarTabActived}}
            selected={this.state.selectedTab === 'BCarTab'}
            onPress={() => { this.setState({ selectedTab: 'BCarTab', }); }}
            data-seed="logId1">
            <TianCars/>
          </TabBar.Item>
          <TabBar.Item title="我的" key="MineTab" icon={{uri: MineTab}} selectedIcon={{uri: MineTabActived}}
            selected={this.state.selectedTab === 'MineTab'}
            onPress={() => { this.setState({ selectedTab: 'MineTab', }); }}
            data-seed="logId1" >
            <TianMine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default HomeTone;