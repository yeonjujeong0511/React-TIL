import { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <h1>useState 연습</h1>
      <p>
        현재 카운트 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        -1
      </button>
    </>
  );
}

export default Counter;
