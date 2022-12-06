import { useState } from "react";
import {
  incrementByAmount,
  decrementByAmount,
  clear,
} from "../../store/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card/Card";
import classes from "./Counter.module.css";
import CounterModal from "../CounterModal/CounterModal";

const Counter = () => {
  const x = 5;

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);

  console.log(count);

  const showModalHandler = () => {
    setIsShown(true);
  };

  const incrementByAmountHandler = (value = 1) => {
    dispatch(incrementByAmount(value));
  };

  const decrementByAmountHandler = (value = 1) => {
    dispatch(decrementByAmount(value));
  };

  const clearHandler = () => {
    dispatch(clear());
  };

  return (
    <Card>
      <div className={classes["counter-items"]}>
        <h1 className={classes.header}>Counter</h1>
        <p className={classes["counter-amount"]}>{count}</p>
        <div className={classes.buttons}>
          <button
            className={classes["btn-decrement"]}
            onClick={() => decrementByAmountHandler(x)}
          >
            -5
          </button>
          <button
            className={classes["btn-decrement"]}
            onClick={() => decrementByAmountHandler()}
          >
            -
          </button>
          <button className={classes["btn-clear"]} onClick={clearHandler}>
            Clear
          </button>
          <button
            className={classes["btn-increment"]}
            onClick={() => incrementByAmountHandler()}
          >
            +
          </button>
          <button
            className={classes["btn-increment"]}
            onClick={() => incrementByAmountHandler(x)}
          >
            +5
          </button>
        </div>
        <div className={classes["more-button-container"]}>
          <button onClick={showModalHandler} className={classes["btn-more"]}>
            More
          </button>
        </div>
      </div>
      {isShown && (
        <CounterModal
          onAdd={incrementByAmountHandler}
          onSubstract={decrementByAmountHandler}
          onClose={() => setIsShown(false)}
        />
      )}
    </Card>
  );
};

export default Counter;
