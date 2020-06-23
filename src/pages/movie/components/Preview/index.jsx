/**
 * Preview 座位屏幕预览小图
 * props:
 *    data: 座位数据
 *  choose: 获取选中的座位
 *    show: 控制Preview是否现实
 */
import React, { useRef, useMemo, useEffect } from 'react';
import styles from './style/index.less';
import useDragger from '@/hooks/useDragger'


export default function Preview(props) {
  const { data, choose, show, Click, offset, scale, canvasSize } = props

  const preview = useRef(null)
  const tips = useRef(null)
  // console.log(screenRef && screenRef.current && screenRef.current.offsetWidth)

  // const SINGLE = {
  //     EMPTY: new Image(),     // 0
  //     UNSELED: singleUnSeled, // 1
  //     SELED: singleSeled, // 2
  //     FIX: singlefixSite, // 3
  //     SALED: singleSaled // 4
  // }
  // const MULT = {
  //     UNSELED: [ muUnseledLeft, muUnseledRight], // 5
  //     SELED: [muSeledLeft, muSeledRight], // 6
  //     SALED: [muSaledLeft, muSaledRight] // 7
  // }
  const sitType = (e) => {  // 根据状态来现实座位的状态
    let type = null         // 默认是空
    if (e === 3 || e === 4 || e === 7) {
      type = styles.red
    }
    if (e === 2 || e === 6) {
      type = styles.green
    }
    if (e === 1 || e === 5) {
      type = styles.white
    }
    return type
  }

  let sitFilter = useMemo(() => { // data数据过滤 过滤 情人座位。连续4，4 =》 4
    let state = false
    let result = []
    data.map((element, idx, arr) => {
      let row = []
      element.map((ele, i, ar) => {
        if (state && ele.state >= 5) {
          state = false
        } else {
          state = true
          row.push(ele)
        }
      })
      result.push(row)
    })
    return result
  }, [data])


  // const clickHandler = (e) => {
  //   let preXY = preview.current.getBoundingClientRect()
  //   let localPointXY = {
  //     x: e.clientX - preXY.x - 25,
  //     y: e.clientY - preXY.y - 25
  //   }
  //   tips.current.style.setProperty('--tipsX', `${localPointXY.x}px`);
  //   tips.current.style.setProperty('--tipsY', `${localPointXY.y}px`);
  // }

  // let limitRage = (content, innerStage, limit = 10) => {    // 获取容器拖动的最大区域
  //   let contentRect = content.current.getClientRects()
  //   let innerRect = innerStage.current.getClientRects()
  //   if (contentRect.length <= 0 || innerRect.length <= 0) return {}
  //   return {
  //       width: innerRect[0].width + limit * 2,
  //       height: innerRect[0].height + limit * 2,
  //       maxY: contentRect[0].height - innerRect[0].height,
  //       minY: 0,
  //       maxX: contentRect[0].width - innerRect[0].width,
  //       minX: 0,
  //   }
  // }
  // const [stop] = useDragger(tips, () => limitRage(preview, tips), [1,0,0], {moveLimit: true})
  useEffect(() => {
    tips.current.style.setProperty('transform', `scale(${1 / scale})`)
    if (offset) {
      let heightRate = preview.current.offsetHeight / canvasSize.height;
      let widthRate = preview.current.offsetWidth / canvasSize.width;
      // console.log(-offset.x * widthRate, -offset.y * heightRate)

      tips.current.style.setProperty('left',
        `${-offset.x * widthRate}px`);
      tips.current.style.setProperty('top',
        `${-offset.y * heightRate}px`);
    }
  }, [canvasSize.height, canvasSize.width, offset, scale])

  return (
    <div className={` ${styles.preview} `} style={{ display: show ? 'block' : 'none' }}
      ref={preview}
      onClick={Click}
    >
      <b className={`${styles.tips}`} ref={tips}></b>
      {
        sitFilter.map((element, idx) => {
          return (
            <div key={`${idx}${Math.random()}`}>
              {element.map((ele) => {
                let block = sitType(ele.state)
                return (
                  <div key={`${ele.id}${Math.random()}`}
                    className={`${block} ${ele.state >= 5 ? styles.loved : styles.single}`}
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