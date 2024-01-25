//reducers
import {combineReducers} from 'redux'
// import {decrement} from '../actions/index' //Trying to implement decrement option but I don't know how to change the state

const counter = (state=0,action)=>{
    if(action.type === 'INCREMENT') {
        //This will increase the value of counter by the value passed to the increment method
        return state+action.inc;
    }
    if(action.type === 'DECREMENT') {
        return state+action.dec;
    }
    //Returns the current value of the counter
    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;
