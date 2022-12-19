import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleShowCounter = () => {
    dispatch({ type: "TOGGLE" });
  };

  const increaseByNumber = (number) => {
    dispatch({ type: "INCREASE", amount: number });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseByNumber(5)}>Increment by 5</button>
      </div>
      <button onClick={handleShowCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
