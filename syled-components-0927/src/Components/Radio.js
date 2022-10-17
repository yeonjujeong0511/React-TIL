import { useState } from 'react';

const Radio = () => {
  const [state, setState] = useState('none');
  const [ischecked, setChecked] = useState(false);

  const onclick = (e) => {
    if (e.target.checked === !ischecked) {
      console.log('체크됨');
      setChecked(ischecked);
      setState('block');
    }
  };
  const onclick2 = (e) => {
    if (e.target.checked === !ischecked) {
      console.log('적용안함체크');
      setState('none');
      setChecked(ischecked);
    }
  };
  return (
    <>
      <h1>라디오버튼 연습</h1>
      <input type='radio' name='discount' onClick={onclick}></input>
      <label>할인적용</label>
      <input
        type='radio'
        name='discount'
        onClick={onclick2}
        checked='cheked'
      ></input>
      <label>적용 안함</label>
      <div style={{ display: `${state}` }}>적용하면 나오기</div>
    </>
  );
};

export default Radio;
