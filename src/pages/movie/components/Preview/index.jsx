/**
 * Preview 座位屏幕预览小图
 * props:
 *    data: 座位数据
 *  choose: 获取选中的座位
 *    show: 控制Preview是否现实
 */
import React, { useRef } from 'react';
import styles from './style/index.less';
import useDragger from '@/hooks/useDragger'

export default function Preview(props) {
  const {data, choose, show } = props

  const preview = useRef(null)
  const tips = useRef(null)

  const sitType = (e) => {  // 根据状态来现实座位的状态
    let type = null         // 默认是空
    if (e === 7 || e === 3 || e === 6) {
      type = styles.red
    }
    if (e === 2 || e === 5) {
      type = styles.green
    }
    if (e === 1 || e === 4) {
      type = styles.white
    }
    return type
  }

  const clickHandler = (e) => {
    let preXY = preview.current.getBoundingClientRect()
    let localPointXY = {
      x: e.clientX - preXY.x - 25,
      y: e.clientY - preXY.y - 25
    }
    tips.current.style.setProperty('--tipsX', `${localPointXY.x}px`);
    tips.current.style.setProperty('--tipsY', `${localPointXY.y}px`);
  }

  let limitRage = (content, innerStage, limit = 10) => {    // 获取容器拖动的最大区域
    let contentRect = content.current.getClientRects()
    let innerRect = innerStage.current.getClientRects()
    if (contentRect.length <= 0 || innerRect.length <= 0) return {}
    return {
        width: innerRect[0].width + limit * 2,
        height: innerRect[0].height + limit * 2,
        maxY: contentRect[0].height - innerRect[0].height,
        minY: 0,
        maxX: contentRect[0].width - innerRect[0].width,
        minX: 0,
    }
  }
  const [stop] = useDragger(tips, () => limitRage(preview, tips), [1,0,0], {moveLimit: true})

  return (
    <div className={` ${styles.preview} `} style={{display: show ? 'block' : 'none' }}
      ref = {preview}
      onClick = {clickHandler}
    >
      <b className={`${styles.tips}`} ref = {tips}></b>
        {
          data.map((element, idx) => {
            return (
            <div key={`${idx}${Math.random()}`}>
              {element.map((ele) => {
                let block = sitType(ele.state)
                if (choose && choose.value.length > 0 ) {
                  let state = choose.value.findIndex((e) => {
                    return e.id === ele.id      // 判断选中的座位的ID
                  })
                  if (state >= 0) {
                    block = sitType(2)
                  }
                }
                
                return (
                  <div key={`${ele.id}${Math.random()}`}
                    className = {`${block} ${ele.state === 4 ? styles.loved : null}`}
                  >
                  </div>
                )

              })}
            </div>)
          })
        }
    </div>
  )
}