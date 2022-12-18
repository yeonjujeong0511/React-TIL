import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// * 리듀서를 하나로 합쳐야한다. 리덕스에서 제공하는 combineReducers라는 유틸함수를 사용하면 쉽게 처리할 수 있음
