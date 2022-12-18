// ! 액션 타입 정하기
// 모듈이름/액션이름

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// ! 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// ! 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
// 초기 상태에는 number값을 설정했고, 리듀서 함수에는 현재 상태를 참고하여 새로운 객체를 생성해서 반환하는 코드를 작성

export default counter;
