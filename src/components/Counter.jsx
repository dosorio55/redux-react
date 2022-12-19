import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
/* el primer counter del counter.counter es el identificador del reducer
definido en el index.js del store, el segundo se refiere al valor del state */
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const handleShowCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseByNumber = (number) => {
    /* the parameters that are in the counterActions.increase are stored in a key called payload*/
    dispatch(counterActions.increase(5));
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
