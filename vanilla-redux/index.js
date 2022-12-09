import { createStore } from "redux";
// 스토어를 만들기 위해 함수를 불러와야한다.
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//console.dir(divToggle);

// 프로젝트의 상태에 변화를 일으키는 것을 액션
// 액션의 이름은 고유해야하고, 주로 대문자로 작성
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 객체를 만드는 액션 생성 함수 작성
// 액션 객체틑 type 값을 반드시 갖고 있어야하며, 추후 상태를 업데이트 할 때 참고하고 싶은 값은 마음대로

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//초깃값 설정
const initalState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의 : 변화를 일으키는 함수
// 함수의 피라미터로 state와 action을 받아온다.

//state가 undefined일 때, initialState를 사용
function reducer(state = initalState, action) {
  // action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle, // 현재 false에서 true로 변함?
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference, // 0 + difference 는 뭘까
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1, // counter(0 // 일단 지금은 0) 에서 -1이된다.
      };
    default:
      return state; // 기본 디폴트 값은 state 값// 일단 지금은 initalState의 상태
  }
}

// 스토어 생성
// 함수의 파라미터에는 리듀서함수를 넣어 주어야한다.
const store = createStore(reducer);

//render함수 만들기
// 상태가 업데이트 될때마다 호출, html에서는 이미 만들어진 ui속성을 상태에 따라 변경해준다.
const render = () => {
  const state = store.getState(); // 현재 상태를 불러온다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
  //
};

// 구독하기
// 스토어의 상태가 바뀔 때마다 render함수가 호출되도록 한다.

//지금은 subscribe 함수를 직접 사용하지만, 리액트에서는 컴포넌트에서 리액트-리덕스 라이브러리가 작업을 대신 해줌
render();
store.subscribe(render);

// 액션 발생시키기 === 디스패치
// dispathch를 사용하여 액션을 스토어에 전달
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
