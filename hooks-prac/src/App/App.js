import './App.css';
import Counter from '../Components/Counter';
import Info from '../Components/Info';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  // visible은 false값으로 할당
  return (
    <>
      <Counter></Counter>
      <hr></hr>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr></hr>
      {visible && <Info />}
      {/* visible은 false 이기때문에, 버튼은 보이기로 할당/
      info 컴포넌트는 보이지 않는다
        클릭이벤트가 일어나면, visible의 값이 true가 되면 버튼은 숨기기로 할당/
        info 컴포넌트가 보인다.
      */}
    </>
  );
}

export default App;
