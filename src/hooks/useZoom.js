/**
 * useDragger hooks
 */
import { useEffect, useRef} from 'react'

const throttle = function(func, delay) {            
    　　var prev = Date.now();            
    　　return function() {                
    　　　　var context = this;                
    　　　　var args = arguments;                
    　　　　var now = Date.now();                
    　　　　if (now - prev >= delay) {                    
    　　　　　　func.apply(context, args);                    
    　　　　　　prev = Date.now();                
    　　　　}            
    　　}        
    } 

const useZoom = (   target, 
                    startEvent = () => {}, 
                    moveEvent = () => {}, 
                    endEvent = () => {}, 
                    deps = [1],  // zoom  moveLimit
                    op = {}
                ) => {
    let options = { zoom: false, move: true,  moveLimit:false, ...op }
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
        // if (options.zoom && e.touches[1]) {
            e.preventDefault()
            pageX = Math.floor(e.touches[0].pageX) // 手指1
            pageY = Math.floor(e.touches[0].pageY) 
            // re_pageX = Math.floor(e.touches[1].pageX) // 手指2
            // re_pageY = Math.floor(e.touches[1].pageY)
            re_pageX = 0
            re_pageY = 0
            distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
            re_size = 1
        // }
        startEvent(e, {size: re_size})
    }
    let touchMoveHandler = function (e) {
        // if (options.zoom && e.touches[1]) {
                e.preventDefault()
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                // re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                // re_pageY = Math.floor(e.touches[1].pageY)

                re_pageX = 0
                re_pageY = 0

                let m_distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                let result = (Math.floor(m_distance) / distance) * re_size
                result = result >= 1.85 ? 1.85 : result <= .8 ? .8 : result
                re_size = Math.floor(result*100)/100
                target.current.style.setProperty('--scale', `${re_size}`);
        // } 
        moveEvent(e, {size: re_size})
    }
    let touchEndHandler = function (e) {
        // e.preventDefault()
        re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size
        target.current.style.setProperty('--scale', `${re_size}`);
        endEvent(e, {size: re_size })
    }

    useEffect(()=>{ 
        start.current = target.current.addEventListener('touchstart', throttle(touchStartHandler, 30), {
            passive: false
        })
        move.current = target.current.addEventListener('touchmove', throttle(touchMoveHandler, 30), {
            passive: false
        })
        end.current = target.current.addEventListener('touchend', throttle(touchEndHandler, 30), {
            passive: false
        })
    }, [])

    useEffect(()=>{ 
        re_size = deps[0]
    }, [...deps])


    let stop = () =>{
        target.current.removeEventListener(start.current)
        target.current.removeEventListener(move.current)
        target.current.removeEventListener(end.current)
    }
    return [stop]
}
export default useZoom