import { useState } from "react";

type Infomation = { name: string; description: string };

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [info, setInformation] = useState<Infomation | null>(null);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>+1</button>
      </div>
    </div>
  );
}

export default Counter;
