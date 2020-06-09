import React, { useEffect } from 'react';
import styles from './style/index.less';
/**
 * 0 空走廊
 * 1 空座位
 * 2 已选座位
 * 3 已售
 * 4 情侣座
 * 5 已选情侣座
 * 6 已售情侣座
 * 7 损坏
 */

export default function Preview(props) {
  const {data, choose, show } = props
  
  const sitType = (e) => {
    let type = null
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
                    return e.id === ele.id
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