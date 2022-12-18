import { createAction, handleActions } from 'redux-actions';
// ! redux-actions을 이용해서 코드를 더 간결하게 할 수 있다.

// ! 액션 타입 정하기
// 모듈이름/액션이름

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// // ! 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// ! 리듀서액션을 통해 액션 생성 함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// ! 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
// 초기 상태에는 number값을 설정했고, 리듀서 함수에는 현재 상태를 참고하여 새로운 객체를 생성해서 반환하는 코드를 작성

// ! 리덕스 액션으로 리듀서 함수도 간결하게
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
