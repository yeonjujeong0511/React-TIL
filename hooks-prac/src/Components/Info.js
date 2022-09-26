import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, {
    inputName: "",
    inputNickName: "",
  });

  const { inputName, inputNickName } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <>
      <h1>useState 여러번 사용하기</h1>
      <input
        name="inputName"
        value={inputName}
        type="text"
        placeholder="이름을 입력해주세요"
        onChange={onChange}
      ></input>
      <input
        name="inputNickName"
        value={inputNickName}
        type="text"
        placeholder="닉네임을 입력해주세요"
        onChange={onChange}
      ></input>
      <div>
        <p>
          <b>이름:</b>
          {inputName}
        </p>
      </div>
      <div>
        <p>
          <b>닉네임:</b>
          {inputNickName}
        </p>
      </div>
    </>
  );
}

export default Info;
