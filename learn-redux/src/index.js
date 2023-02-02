import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';


// STORE -> GLOBAL STATE

// ACTION INCREMENT

const increment = () => {
  return {
    type: "INCREMENT"
  }
}
const decrement = () => {
  return {
    type: "DECREMENT"
  }
}


//REDUCER

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;
  }
}
let store = createStore(counter)

// Display it in the console


//DISPATCH
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
