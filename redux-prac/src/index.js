import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// * 스토어를 만들고 리액트에서 리덕스를 적용한다.
const store = createStore(rootReducer);

// * 리액트에서 스토어를 사용 할 수있도록, provider로 감싸주고, store를 propps로 전달해주어야한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
