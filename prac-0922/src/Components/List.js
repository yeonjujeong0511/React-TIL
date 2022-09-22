import { useState } from 'react';

function List() {
  const [inputData, setInputData] = useState('');
  const onChange = (e) => {
    setInputData(e.target.value);
  };
  const clickEvent = () => {
    alert(inputData);
    setInputData('');
  };

  return (
    <>
      <h1>coffee</h1>
      <input
        type='text'
        placeholder='마시고 싶은 커피를 입력하세요'
        value={inputData}
        onChange={onChange}
      ></input>
      <button onClick={clickEvent}>추가버튼</button>
    </>
  );
}

export default List;
