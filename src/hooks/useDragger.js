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

const useDragger = (target, 
                    limit, 
                    deps = [],  // zoom  X Y 
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
        if (zoom && e.touches[1]) {
                e.preventDefault()
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                // re_pageX = 10
                // re_pageY = 10
                distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                re_size = target.current.style.getPropertyValue('--scale') || 1
        } else {
            pageX = Math.floor(e.touches[0].pageX)
            pageY = Math.floor(e.touches[0].pageY)
            currX = Math.floor(parseInt(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY = Math.floor(parseInt(target.current.style.getPropertyValue('--transformY'))) || 0;
        }
        startEvent(e, {size: re_size, x: currX, y: currY})
    }
    let touchMoveHandler = function (e) {
        debugger
        if (zoom && e.touches[1]) {
                e.preventDefault()
                pageX = Math.floor(e.touches[0].pageX) // 手指1
                pageY = Math.floor(e.touches[0].pageY) 
                re_pageX = Math.floor(e.touches[1].pageX) // 手指2
                re_pageY = Math.floor(e.touches[1].pageY)
                // re_pageX = 10
                // re_pageY = 10
                let m_distance = Math.floor(Math.sqrt(Math.pow((re_pageX - pageX ), 2) + Math.pow((re_pageY - pageY ), 2)))
                let result = (Math.floor(m_distance) / distance) * re_size
                result = result >= 1.85 ? 1.85 : result <= .8 ? .8 : result
                re_size = Math.floor(result*100)/100
                target.current.style.setProperty('--scale', `${re_size}`);
                
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
        moveEvent(e, {size: re_size, x: currX, y: currY})
    }
    let touchEndHandler = function (e) {
        debugger
        re_size = target.current.style.getPropertyValue('--scale')
        re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size
        if (zoom && e.touches[1]) {
            e.preventDefault()
            target.current.style.setProperty('--scale', `${re_size}`);
        } 
        
        currX = Math.floor(parseInt(target.current.style.getPropertyValue('--transformX'))) || 0;
        currY = Math.floor(parseInt(target.current.style.getPropertyValue('--transformY'))) || 0;
        if (limit) {
            let rage = limit()
            currX = (currX >= rage.maxX) ? rage.maxX : (currX <= rage.minX) ? rage.minX : currX
            currY = (currY >= rage.maxY) ? rage.maxY : (currY <= rage.minY) ? rage.minY : currY
        }
        target.current.style.setProperty('--transformX', `${currX}px`);
        target.current.style.setProperty('--transformY', `${currY}px`);
        
        endEvent(e, {size: re_size, x: currX, y: currY})
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
        // start.current = target.current.addEventListener('touchstart', touchStartHandler)
        // move.current = target.current.addEventListener('touchmove', touchMoveHandler)
        // end.current = target.current.addEventListener('touchend', touchEndHandler)
    }, [])

    useEffect(()=>{ 
        debugger
        currX = deps[1]
        currY = deps[2]
        re_size = deps[0]

        if (limit) {
            let rage = limit()
            currX = (currX >= rage.maxX) ? rage.maxX : (currX <= rage.minX) ? rage.minX : currX
            currY = (currY >= rage.maxY) ? rage.maxY : (currY <= rage.minY) ? rage.minY : currY
        }
        re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size

        target.current.style.setProperty('--transformX', `${currX}px`);
        target.current.style.setProperty('--transformY', `${currY}px`);
        target.current.style.setProperty('--scale', `${re_size}`);

    }, [...deps])


    let stop = () =>{
        target.current.removeEventListener(start.current)
        target.current.removeEventListener(move.current)
        target.current.removeEventListener(end.current)
    }
    return [stop]
}
export default useDragger