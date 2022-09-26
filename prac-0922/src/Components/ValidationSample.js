import { useState, useRef } from 'react';
import './ValidationSamPle.css';

function ValidationSamPle() {
  const inputRef = useRef();
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState('false');
  const [validated, setValidated] = useState('false');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  // 함수가 발생하면, password를 함수가 발생한 곳에 value값으로 할당한다.

  const handleButtonClick = () => {
    setClicked('true');
    setValidated(password === '0000');
    inputRef.current.focus();
  };
  // 함수가 발생하면, clicked는 true를 할당
  // validated는  password가 0000인것을 확인한다.
  // input에 커서를 옮긴다.

  return (
    <>
      <h1>ref연습</h1>
      <input
        ref={inputRef} // 빈칸
        type='password' // 문자가 동그라미로 가려진다.
        value={password} // 함수가 발생하기 전까지는 빈칸
        onChange={handleChange} // input에 변화가 생기면 handleChane함수가 발생해서, input에 발생한 값이 password가 된다.
        className={clicked ? (validated ? 'success' : 'failure') : ''}
      ></input>
      {/* ? */}
      <button onClick={handleButtonClick}>검증하기</button>
      {/* 버튼이 클릭하면 handleButtonClick 함수가 발생*/}
    </>
  );
}

export default ValidationSamPle;
