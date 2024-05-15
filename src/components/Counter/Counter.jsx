import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlices";

function Counter() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <h2>{count >= 0 ? `You have seen ${count} mallards`: `How did you see less than 1 mallard???`}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Counter;
