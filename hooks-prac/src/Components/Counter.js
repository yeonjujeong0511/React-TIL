import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(1);

  const clickPlus = () => {
    setValue(value + 1);
  };

  const clickMinus = () => {
    setValue(value - 1);
  };

  return (
    <>
      <h1>useState 연습</h1>
      <p>
        현재 카운트 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={clickPlus}>+1</button>
      <button onClick={clickMinus}>-1</button>
    </>
  );
}

export default Counter;
