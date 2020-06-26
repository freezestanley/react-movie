/**
 * Preview 座位屏幕预览小图
 * props:
 *    data: 座位数据
 *  choose: 获取选中的座位
 *    show: 控制Preview是否现实
 */
import React, { useRef, useEffect } from 'react';
import styles from './style/index.less';
import useDragger from '@/hooks/useDragger'
import SeaCanvas from './seaCanvas'


export default function Preview(props) {
  const {data, show, Click, move } = props
  const preview = useRef(null)
  const tips = useRef(null)

  useEffect(()=>{
    // console.log(move)
    if(!move) return
    let rate = preview.current.getClientRects()[0].width / tips.current.getClientRects()[0].width
    tips.current.style.setProperty('--transformX', `${-move.x/rate}px`);
    tips.current.style.setProperty('--transformY', `${-move.y/rate}px`);
  }, [move])

  return (
    <div className={` ${styles.preview} `} style={{display: show ? 'block' : 'none' }}
      ref = {preview}
      onClick = {Click}
    >
      <b className={`${styles.tips}`} ref = {tips}></b>
        <SeaCanvas 
          data={data} 
          getZoom = {()=>{}} 
          getSeledSit = {()=>{}}/>
    </div>
  )
}