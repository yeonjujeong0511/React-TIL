import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increse, decrese } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increse()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrese()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
