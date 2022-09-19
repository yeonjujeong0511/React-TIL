import './App.css';
import Yeonju from '../Components/Yeonju.js';
import { createContext } from 'react';

const data = createContext();

function App() {
  const hello = '곡식이네';
  const bye = '소개였습니당';
  return (
    <data.Provider value={bye}>
      <Yeonju hello={hello}></Yeonju>
    </data.Provider>
  );
}

export { App, data };
