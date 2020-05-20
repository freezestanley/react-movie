import React, { useEffect, useReducer, useRef, useState, useCallback } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';

const set = new Set()

export default function Callback (){
    const [count, setCount] = useState(1);
    const [val, setVal]= useState('')
    const callback = useCallback(() => {
        console.log(count)
    }, [])
    set.add(callback)
    return ( 
    <>
        <h4>count:{count}</h4>
        <h4>size:{set.size}</h4>
        <button 
            onClick={()=>setCount(count + 1)}
        >   +   </button>
    </>)
}