import { useState } from 'react';

const RadioBtn = () => {
  const [result, setResult] = useState('');
  const onChange = (e) => {
    let target = e.target;
    let message;
    switch (target.id) {
      case 'discount':
        message = '할인적용 할거야';
        break;
      case 'nodiscount':
        message = '할인적용 안할거야';
        break;
    }
    setResult(message);
  };
  return (
    <>
      <h1>라디오 버튼 연습</h1>
      <input type='radio' id='discount' name='discount' onChange={onChange} />
      <label for='할인 적용'>할인 적용</label>
      <input type='radio' id='nodiscount' name='discount' />
      <label for='적용 안함'>적용 안함</label>
      <p>{result}</p>
    </>
  );
};

export default RadioBtn;
