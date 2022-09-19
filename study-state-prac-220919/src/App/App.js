import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  //const decreseNumber = () =>{}

  return (
    <>
      <h1>{number}</h1>
      <button onClick={increaseNumber}>+1</button>
      <button>-1</button>
    </>
  );
}

export default App;
