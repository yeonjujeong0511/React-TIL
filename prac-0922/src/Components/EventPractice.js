import { useState } from 'react';
// useState를 사용하겠다.
function EventPractice() {
  // EventPractice라는 컴포넌트 선언
  const [name, setName] = useState('');
  // text에 일단 빈칸을 선언, setText로 상태를 변화시킬예정
  const [text, setText] = useState('');
  const clickEvent = () => {
    alert(name + text);
    setName('');
    setText('');
  };
  // clickEvent라는 함수선언
  // 알림창에 text를 보여주겠다.
  // text를 보여준 후에는 다시 text값을 ''으로 할당
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type='text'
        placeholder='이름을 입력하세요'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          // console.log(e.target.value);
        }}
      ></input>
      <input
        type='text'
        placeholder='아무거나 입력하세요'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={clickEvent}>확인</button>
    </>
  );
}
// input 를 text로 할당, 지금 text는 할당된 값이 없다.
// e.target.value라는 값은 input부분이라는 걸 알수있었다.
// onChnage 이벤트로 e.target.value라는text의 값의 상태를 변경해주었다.
// e.target.value 값을 text에 할당
// 확인버튼을 누르면 알림창에 text값이 나오게 했다.

export default EventPractice;
