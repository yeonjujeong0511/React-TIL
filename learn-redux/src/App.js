import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector(state => state.counter)
  const isLoggend = useSelector(state => state.isLoggend)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggend ? <h3>로그인하세요</h3> : ""}
    </div>
  );
}

export default App;
