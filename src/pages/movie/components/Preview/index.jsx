/**
 * Preview 座位屏幕预览小图
 * props:
 *    data: 座位数据
 *  choose: 获取选中的座位
 *    show: 控制Preview是否现实
 */
import React from 'react';
import styles from './style/index.less';

export default function Preview(props) {
  const {data, choose, show } = props
  
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

  return (
    <div className={` ${show ? styles.preview : null} `}>
        {
          data.map((element, idx) => {
            return (
            <div key={`${idx}`}>
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
                  <div key={`${ele.id}`}
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