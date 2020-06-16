/**
 * useDragger hooks
 */
import { useEffect, useRef} from 'react'

const useDragger = (target, 
                    limit, 
                    deps = [], 
                    zoom = false,
                    startEvent = () => {}, 
                    moveEvent = () => {}, 
                    endEvent = () => {}, 
                    ) => {

    let start = useRef(), 
        move = useRef(), 
        end = useRef()
    let pageX = 0, 
        pageY = 0,
        currX = 0,
        currY = 0,
        moveX = 0,
        moveY = 0;

    let re_pageX = 0,
        re_pageY = 0,
        re_size  = 1,
        distance = 0;

    let touchStartHandler = function (e) {
        // e.preventDefault()
        if (zoom && e.touches[1]) {
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                re_pageX = 10
                re_pageY = 10
                distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                re_size = target.current.style.getPropertyValue('--scale')
        } else {
            pageX = Math.floor(e.touches[0].pageX)
            pageY = Math.floor(e.touches[0].pageY)
            currX = Math.floor(parseInt(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY = Math.floor(parseInt(target.current.style.getPropertyValue('--transformY'))) || 0;
        }
    }
    let touchMoveHandler = function (e) {
        // e.preventDefault()
        if (zoom && e.touches[1]) {
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                re_pageX = 10
                re_pageY = 10
                let m_distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                let result = (Math.floor(m_distance) / distance) * re_size
                result = result >= 1.85 ? 1.85 : result <= .8 ? .8 : result
                target.current.style.setProperty('--scale', `${result}`);
                re_size = result
        } else {
            currX = Math.floor(parseInt(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY = Math.floor(parseInt(target.current.style.getPropertyValue('--transformY'))) || 0;
            moveX = Math.floor(e.touches[0].pageX - pageX)
            moveY = Math.floor(e.touches[0].pageY - pageY)
            pageX = Math.floor(e.touches[0].pageX)
            pageY = Math.floor(e.touches[0].pageY)
            currX += Math.floor(moveX);
            currY += Math.floor(moveY);
            target.current.style.setProperty('--transformX', `${currX}px`);
            target.current.style.setProperty('--transformY', `${currY}px`);
        }
    }
    let touchEndHandler = function (e) {
        // e.preventDefault()
        if (zoom && e.touches[1]) {
            re_size = target.current.style.getPropertyValue('--scale')
            re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size
            target.current.style.setProperty('--scale', `${re_size}`);
        } else {
            currX = Math.floor(parseInt(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY = Math.floor(parseInt(target.current.style.getPropertyValue('--transformY'))) || 0;
            if (limit) {
                let rage = limit()
                currX = (currX >= rage.maxX) ? rage.maxX : (currX <= rage.minX) ? rage.minX : currX
                currY = (currY >= rage.maxY) ? rage.maxY : (currY <= rage.minY) ? rage.minY : currY
            }
            target.current.style.setProperty('--transformX', `${currX}px`);
            target.current.style.setProperty('--transformY', `${currY}px`);
        }
    }

    useEffect(()=>{ 
        start.current = target.current.addEventListener('touchstart', touchStartHandler, {
            passive: false
        })
        move.current = target.current.addEventListener('touchmove', touchMoveHandler, {
            passive: false
        })
        end.current = target.current.addEventListener('touchend', touchEndHandler, {
            passive: false
        })
    }, [])

    useEffect(()=>{ 
        target.current.style.setProperty('--scale', `${deps[0]}`);
        target.current.style.setProperty('--transformX', `${deps[1]}px`);
        target.current.style.setProperty('--transformY', `${deps[2]}px`);
    }, [...deps])


    let stop = () =>{
        target.current.removeEventListener(start.current)
        target.current.removeEventListener(move.current)
        target.current.removeEventListener(end.current)
    }
    return [stop]
}
export default useDragger