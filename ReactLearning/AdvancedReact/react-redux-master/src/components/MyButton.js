import React from 'react'
import {useDispatch} from 'react-redux';
import increment from '../actions'
import decrement from '../actions'

const IncButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(1))}>Increase Counter</button>
    );
}

export const DecButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(decrement(-1))}>Decrease Counter</button>
    )
}

export {IncButton};
