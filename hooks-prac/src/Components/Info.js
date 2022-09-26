import { useState, useEffect } from 'react';

function Info() {
  const [inputName, setInputName] = useState('');
  const [inputNickName, setInputNickName] = useState('');

  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup');
    };
  }, []);
  // 마운트 되면 effect가 콘솔에 찍히고, 언마운트되면 cleanup이 콘솔에 찍힌다.
  const onChangeName = (e) => {
    setInputName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setInputNickName(e.target.value);
  };

  return (
    <>
      <h1>useState 여러번 사용하기</h1>
      <input
        type='text'
        placeholder='이름을 입력해주세요'
        onChange={onChangeName}
      ></input>
      <input
        type='text'
        placeholder='닉네임을 입력해주세요'
        onChange={onChangeNickName}
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
