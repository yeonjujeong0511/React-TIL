import { Component } from 'react';

class ClickEvent extends Component {
  // ClickEvent라는 컴포넌트 생성
  state = { text: '' };
  // 스테이트 text에 '' 빈칸 초기값 설정
  render() {
    const { text } = this.state;
    // state 조회
    return (
      <>
        <h1>연습해보기</h1>
        <button onClick={() => this.setState({ text: '😀' })}>click!</button>
        {/* onclick 버튼을 클릭하면, text의 상태변화가 일어난다.
        text를 😀로 할당 
        */}
        <p>{text}</p>
      </>
    );
  }
}

export default ClickEvent;
