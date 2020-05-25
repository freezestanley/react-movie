import React from 'react';
import './index.less';
export default({ title, icon, onClick })=>{
  const handleClick=()=>{
    onClick && onClick()
  }
  return(
    <div className='menu_item'  onClick={handleClick}>
      <img src={icon} alt=""/>
      <span>{title}</span>
      <img src={require('../../images/arrow.svg')} alt=""/>
    </div>
  )
}