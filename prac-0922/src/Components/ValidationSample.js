import { useState, useRef } from "react";
// 함수형 컴포넌트에서 useState와 useRef 사용할때
import "./ValidationSamPle.css";

function ValidationSamPle() {
  const inputRef = useRef();
  // ustState 처럼 ref사용할때도 이렇게 해줘야한다.
  const [password, setPassword] = useState("");
  // password는 ''빈칸, 아무것도 할당되있지 않음
  // setPassword로 password값 할당
  const [clicked, setClicked] = useState("false");
  // clicked는 false로 할당
  const [validated, setValidated] = useState("false");
  // validated는 false로 할당

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  // 함수가 발생되면 password에 e.target.value값이 할당

  const handleButtonClick = () => {
    setClicked("true");
    setValidated(password === "0000");
    inputRef.current.focus();
  };
  // 함수가 실행되면, clicked에 true 할당
  // validated 값은 password 가 0000과 일치하는지를 할당
  // input에 커서가 가게한다. (focus로 인해 커서가 input으로 넘어간다.)
  return (
    <>
      <h1>ref연습</h1>
      <input
        ref={inputRef}
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      ></input>
      <button onClick={handleButtonClick}>검증하기</button>
    </>
  );
}

export default ValidationSamPle;
