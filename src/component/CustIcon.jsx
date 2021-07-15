import React from 'react';
class CustIcon extends React.Component {
  render () {
    let { width , height, url, 
          repeat, paddingLeft, 
          paddingRight, 
          borderRadius,
          marginRight,
         } = this.props;
    height = height ? height : width;
    repeat = repeat ? repeat : width;
    borderRadius = borderRadius ? borderRadius : 0
    marginRight = marginRight ? marginRight : 0
    return (
      <div style={{ width: width, 
        height: height, 
        background: `url(${url}) center center /  ${repeat}px ${repeat}px no-repeat`, 
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        borderRadius: borderRadius,
        marginRight: marginRight
       }}></div>
    );
  }
}
export default CustIcon;