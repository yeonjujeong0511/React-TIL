import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button>추가버튼</button>
      <button onClick={increaseNumber}>+1</button>
      <button onClick={decreseNumber}>-1</button>
      <div>여기에추가될것</div>
    </>
  );
}

export default App;
