import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import Cb from './callback'

const usePrevious = (value) => {
    const ref = useRef()
    useEffect(()=> {
        ref.current = value
    })
    return ref.current
}
const Child2 = React.forwardRef((props, ref) => {
    return <button ref={ref}>Child2</button>
})
class Child extends React.Component{
    handleLog = () => {
        console.log('children component')
    }
    render () {
        const {count } = this.props
    return <h2>count: {count}</h2>
    }
}
const Test = (props) => {
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)
    const childRef = useRef()
    const child2Ref = useRef()
    const counter = useRef(0)

    const ref = useRef('vnues')

    const handleBtnClick = () => {
        counter.current = counter.current+1
        console.log(counter)
    }

    let google = usePrevious('Abcd')
    console.log('google:' + google)

    useEffect(() => {
        console.log('useRef')
        console.log(childRef.current)
        childRef.current.handleLog()
        console.log('child2ref', child2Ref)
    }, [])


    console.log(inputRef)
    useEffect(()=>{
        console.log(inputRef)
    })
    
    useEffect(()=>{
        
        const timeId = setInterval(()=>{
            console.log(count)
            setCount(count + 1)
        }, 1000)
        return () => {
            clearInterval(timeId)
            
        }
    })
  return (
    <div ref={inputRef}>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <Child ref={childRef} count="1"/>
        <Child2 ref={child2Ref}/>
        --------------------
        <Cb/>
    </div>
  );
}

export default connect(state => ({
  loading: state.loading.effects['user/login'],
}))(Test);
