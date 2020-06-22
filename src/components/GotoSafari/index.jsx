import React from 'react';
import style from './index.less';
import arrow from './images/arrow.png'
const GotoSafari = () => {
  return (
    <div className={style['safari-page']}>
      <div className={style['img-box']}>
        <img src={arrow} className={style['arrow']} alt='' />

      </div>
      <div className={style['safari-text']}>请点击右上角···在浏览器打开</div>
    </div>
  )
}
export default GotoSafari