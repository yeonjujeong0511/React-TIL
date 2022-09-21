import { useState } from 'react';
import './App.css';
import IterationSample from '../Components/IterationSample';

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
      <button onClick={increaseNumber}>+1</button>
      <button onClick={decreseNumber}>-1</button>
      <br></br>
      <IterationSample></IterationSample>
    </>
  );
}

export default App;
