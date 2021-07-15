import React from 'react';
import PropTypes from 'prop-types'
import CustIcon from '@/component/CustIcon';

import { BoutContainer } from '../js/StyledHome'

import IconMore from '@assets/images/icon_more_small.svg';
import IconView from "@assets/images/icon_view.svg";
import IconFavarate from "@assets/images/icon_favarate.svg";
import TianCaiJingPin from '@assets/images/icon_jingpin.svg'

/** 精品时讯 */
const Boutique = (props) => {
  const items = props.items
  return (
    <BoutContainer>
      <h1>
        <div style={{ width: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14,}}>
          <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: 14}}>
            <CustIcon width={22} url={ TianCaiJingPin }/>
            <span style={{ paddingLeft: 5,fontSize: 16, color: '#1296db'  }}>精品资源</span>
          </div>
          <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', color: '#666', paddingRight: '1rem'}}>
            <CustIcon width={22} url={ IconMore }/> 更多
          </div>
        </div>
      </h1>
      <ul className='tiancai-boutique'>
        {items && items.map((item) => {
          return (
            <li key={item.title}>
              <div className={ item.last ? 'tc-last-detail' : ''}> 
                <img src={item.icon} style={{width: item.last ? 'auto' : '100%', borderRadius: '5px 5px 0 0' }} alt={item.title}/>
              </div>
              <div style={{ display: item.last ? 'none' : 'flex', borderRadius: '0 0 5px 5px', marginTop: -3}}>
                <span>{item.title}</span>
                <span>
                  <CustIcon width={16 } url={IconView} paddingRight={20}/> <span>{item.viewCnt}</span> 
                  <CustIcon width={16} url={IconFavarate} paddingRight={20}/><span>{item.favariate}</span>
                </span>
              </div>
            </li>
            )
        })}
      </ul>
    </BoutContainer>
  )
}

Boutique.propTypes = {
  items: PropTypes.array
}

export default Boutique



