import React from 'react'
import Boutique from './Boutique'

import HomeHeader from './HomeHeader'
import HotCategory from './HotCategory'
import TainCaiHSwiper from './TainCaiHSwiper'

import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import '@/assets/css/tian-web.css'
// import img1 from '@assets/images/mv.jpg';
// import mv5 from '@assets/images/mv-005.jpg';
import mv11 from '@assets/images/mv-11.jpg';

// import TianSearch from '@/component/TianSearch'

/** cate detail images */
import img1 from '@assets/images/mv.jpg';
import img2 from '@assets/images/mv-1.jpg';
import mv03 from '@assets/images/mv-003.jpg';
import img3 from '@assets/images/mvtx-2.jpg';
import mv05 from '@assets/images/mv-005.jpg';
import mv06 from '@assets/images/mv-006.jpg';
import dv01 from '@assets/images/dv-001.jpg';
import dv02 from '@assets/images/dv-002.jpg';
import dv03 from '@assets/images/dv-003.jpg';

const boutiqueData = [
  {icon: img1, title: '清华美女1', mleft: false, favariate: 12, viewCnt: 93},
  {icon: img2, title: '北大美女1', mleft: true, favariate: 128, viewCnt: 821},
  {icon: img3, title: '上海交大', mleft: false, favariate: 64, viewCnt: 198},
  {icon: img1, title: '北航美女1', mleft: true, favariate: 26, viewCnt: 123},
  {icon: mv03, title: '河农大美女1', mleft: false, favariate: 63, viewCnt: 305},
  {icon: mv05, title: '南大学霸', mleft: true, favariate: 1299, viewCnt: 5020},
  {icon: mv06, title: '郑大学姐', mleft: false, favariate: 2506, viewCnt: 8920},
]

const TianHomeUi = (props) => {
  /** -- 轮播图图片 -- **/ 
  const images = [mv11,dv01,dv02,dv03,img1, mv05]
  const swiper = memoize(list => list && list.slice(0, 5))
  // const filterSwiper = swiper(props.list)

  return (
    <div className='tiancai-home'>
      {/* <TianSearch/> */}
      <HomeHeader titleComnent={'天才领地'}></HomeHeader>
      <TainCaiHSwiper list={swiper(props.list)} images={images}/>
      <HotCategory/>
      <Boutique items={boutiqueData}/>
    </div>  
  ) 
}

TianHomeUi.propTypes = {
  list: PropTypes.array,
  data: PropTypes.object,
  boutiqueData: PropTypes.array
}

export default TianHomeUi;