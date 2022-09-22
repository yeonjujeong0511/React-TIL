import { useState } from 'react';
// useState를 사용하겠다

function Like() {
  // Like 컴포넌트 선언
  const [heart, setHeart] = useState(['']);
  // useState에는 일단 빈칸을 할당
  // heart는 현재 상태, setHeart는 상태를 바꾸어주는 함수
  const clickLike = () => setHeart('🧡');
  // clickLike 함수는 heart의 값을 '🧡'로 바꿔준다
  const clickBad = () => setHeart('❌');
  // clickLike 함수는 heart의 값을 '❌'로 바꿔준다
  return (
    // 컴포넌트의 출력값
    // h1태그안에 heart값을 입력
    // 맨 윗 줄에 heart갑은 빈칸이지만,
    // 좋아요 버튼을 누르면 clickLike함수가 실행되서 heart의 값이 변한다.
    // 싫어요 버튼을 누르면 clickBad함수가 실행되서 heart의 값이 변한다.
    <>
      <h1>{heart}</h1>
      <button onClick={clickLike}>좋아요👍</button>
      <button onClick={clickBad}>싫어요😂</button>
    </>
  );
}

export default Like;
