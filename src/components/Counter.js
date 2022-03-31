import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const state = useSelector((state) => state);
  console.log(state);

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  console.log(show);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "increment", payload: 10 });
  };

  const decrementCounter = () => {
    dispatch({ type: "decrement", key: 2 });
  };

  const toggleCounter = () => {
    dispatch({ type: "toggle", key: 2 });
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