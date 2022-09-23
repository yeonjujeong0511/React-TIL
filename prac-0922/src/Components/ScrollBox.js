import { useRef } from 'react';

function ScrollBox() {
  const boxRef = useRef();

  // 함수 컴포넌트에서 Ref 사용법
  const stlye = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative',
  };
  // 스크롤박스를 만드는 스타일링

  const innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white,black)',
  };

  const scrollToBottom = () => {
    const scrollHeight = boxRef.current.scrollHeight;
    const clientHeight = boxRef.current.clientHeight;
    boxRef.current.scrollTop = scrollHeight - clientHeight;
  };

  return (
    <>
      <h1>컴포넌트에 ref달기</h1>
      <div style={stlye} ref={boxRef}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollToBottom}>맨밑으로</button>
    </>
  );
}

export default ScrollBox;
