const SIGN_IN = 'isLogged/SIGN_IN'

// 액션 타입 정의

export const sign_in = () => ({ type: SIGN_IN })

// 액션 생성 함수 만들기


// 초기 상태
const initialState = {
  sign: false
}

// 리듀서 함수
const isLogged = (state = initialState.sign, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
}
export default isLogged;