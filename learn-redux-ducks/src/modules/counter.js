const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 타입 정의

export const increse = () => ({ type: INCREASE })
export const decrese = () => ({ type: DECREASE })

// 액션 생성 함수 만들기

const initialState = {
  number: 0
}

// 초기 상태에 number를 0으로 해줌

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      }
    case DECREASE:
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}

export default counter