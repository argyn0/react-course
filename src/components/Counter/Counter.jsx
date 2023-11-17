import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addBy, multiplyBy, divideBy } from "../../store/counterSlice";
import s from "./Counter.module.scss";

function Counter() {
    const n = 20;
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);
    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    const onAddBy = () => {
        dispatch(addBy(n))
    }
    const onMultiBy = () => {
        dispatch(multiplyBy(n));
    }
    const onDivideBy = () => {
        dispatch(divideBy(n));
    }
    return (
        <div className={s.counter}>
            <div className={s.buttons}>
                <button className={s.button} onClick={onDecrement}>-1</button>
                <button className={s.button} onClick={onIncrement}>+1</button>
                <button className={s.button} onClick={onAddBy}>+{n}</button>
                <button className={s.button} onClick={onMultiBy}>*{n}</button>
                <button className={s.button} onClick={onDivideBy}>/{n}</button>
            </div>
            <div className={s.value}>{count}</div>
        </div>
    );
}

export default Counter;