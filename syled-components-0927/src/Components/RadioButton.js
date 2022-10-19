import { useState } from 'react';

const RadioButton = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <h1>라디오버튼..제발되라..ㅎ</h1>
      <input
        type='radio'
        name='discount'
        value='할인적용'
        checked={value === '할인적용' ? 'checked' : ''}
        onChange={() => setValue(<h1>이거만들거다</h1>)}
      />
      {''}할인적용적용
      <input
        type='radio'
        name='discount'
        value='적용안함'
        checked={value === '적용안함' ? 'checked' : ''}
        onChange={() => setValue('적용안함')}
      />
      {''}적용안함안함
      <p>{value}</p>
    </>
  );
};
export default RadioButton;
