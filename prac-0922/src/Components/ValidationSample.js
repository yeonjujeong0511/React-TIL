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

  const handleButtonClick = () => {
    setClicked('true');
    setValidated(password === '0000');
    inputRef.current.focus();
  };

  return (
    <>
      <h1>ref연습</h1>
      <input
        ref={inputRef}
        type='password'
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? 'success' : 'failure') : ''}
      ></input>
      <button onClick={handleButtonClick}>검증하기</button>
    </>
  );
}

export default ValidationSamPle;
