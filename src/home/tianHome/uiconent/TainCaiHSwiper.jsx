import React from 'react'
import PropTypes from 'prop-types'
import { Carousel }  from 'antd-mobile'

const TainCaiHSwiper = (props) => {
  const { list, images } = props
  console.log('tianCaiSwiper=>', list);
  return (
    <div style={{ width: '100%', height: '180px'}}>
      <div className='tc-hm-sw'>
        <Carousel 
          arrows 
          infinite
          autoplay={true} 
          dotStyle={{background: '#ffffff'}}
          dotActiveStyle={{background: '#108ee9', width:'16px', borderRadius: '45%'}} >
          {
            /**
             * images.map(val => { return <a><img src=..../></a>})
             */
            images.length > 0 && images.map((val, index) => (
              <a key={ val } href="http://www.baidu.com" 
                style={{height: '168px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <img src={val} alt="1" style={{height:'100%', width: '90%', borderRadius: '10px'}}/>
              </a>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

TainCaiHSwiper.propTypes = {
  list: PropTypes.array,
  images: PropTypes.array
}

export default TainCaiHSwiper