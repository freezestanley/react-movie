/**
 * useDragger hooks
 */
import { useEffect, useRef} from 'react'

const useZoom = (target,
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
        currY = 0;

    let re_pageX = 0,
        re_pageY = 0,
        re_size  = 1,
        distance = 0;

    let touchStartHandler = function (e) {
        // e.preventDefault()
        if (e.touches[1]) {
        // if (true) {
                e.preventDefault()
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                // re_pageX = 10
                // re_pageY = 10
                distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                re_size = target.current.style.getPropertyValue('--scale') || 1
        } 
        startEvent(e, {size: re_size, x: currX, y: currY})
    }
    let touchMoveHandler = function (e) {
        // e.preventDefault()
        let m_distance, result
        if (e.touches[1]) {
        // if (true) {
                e.preventDefault()
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                // re_pageX = 10
                // re_pageY = 10
                m_distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                result = (m_distance / distance) * re_size
                // result = result >= 1.85 ? 1.85 : result <= .8 ? .8 : result
                // re_size = Math.floor(result*100)/100
                result = Math.floor(result * 100) / 100
        } 
        moveEvent(e, {size: result, s: `${m_distance} || ${distance} || ${result} || ${re_size}`})
    }
    let touchEndHandler = function (e) {
        // e.preventDefault()
        if (e.touches[1]) {
            e.preventDefault()
            // re_size = target.current.style.getPropertyValue('--scale')
            re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size
            
        } 
        endEvent(e, {size: re_size})
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

    let stop = () =>{
        target.current.removeEventListener(start.current)
        target.current.removeEventListener(move.current)
        target.current.removeEventListener(end.current)
    }
    return [stop]
}
export default useZoom