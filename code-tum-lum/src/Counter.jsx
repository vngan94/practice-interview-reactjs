import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementCounter, incrementCounter} from "./counterAction";
function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.count)
    const handleDecrement = () => {
        dispatch(decrementCounter());
    }
    
    const handleIncrement = () => {
        dispatch(incrementCounter());
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
        </div>
    )
}

export default Counter;