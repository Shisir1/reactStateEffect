import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";

const Counter = () => {
  const state = useSelector((state) => state);


  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);


  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(counterActions.increment(10));
  };

  const decrementCounter = () => {
    dispatch(counterActions.decrement(10));
  };

  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementCounter}>incrementCounter</button>
      <button onClick={decrementCounter} className={classes.button}>
        decrementCounter
      </button>
      <button onClick={toggleCounter} className={classes.button}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;