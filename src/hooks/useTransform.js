/**
 * useDragger hooks
 */
import { useEffect } from 'react'

const useTransform = (target, deps = []) => {
    useEffect(() => {
        debugger
        target.current.style.setProperty('--scale', `${deps[0]}`);
        target.current.style.setProperty('--transformX', `${deps[1]}px`);
        target.current.style.setProperty('--transformY', `${deps[2]}px`);
    }, [...deps])
}
export default useTransform