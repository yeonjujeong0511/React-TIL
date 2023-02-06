import { createAction, handleActions } from "redux-actions"

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 타입 정의

export const increse = createAction(INCREASE)
export const decrese = createAction(DECREASE)

// 액션 생성 함수 만들기

const initialState = {
  number: 0
}

// 초기 상태에 number를 0으로 해줌
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
)

export default counter

// 리듀서 함수는 현재 상태를 참조하여 새로운 객체를 생성해서 반환 하는 코드를 만듬