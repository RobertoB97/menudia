import React from "react";
import {useSelector, useDispatch} from "react-redux";
// import {decrement, increment} from "../features/counter/counterSlice";
import styles from "./Counter.module.css";

export default function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value">Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value">Decrement</button>
            </div>
        </div>
    );
}
