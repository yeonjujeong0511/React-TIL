import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    // state를 조회할 때는 this.stete로 조회
    return (
      <>
        <h1>클래스형 컴포넌트 state</h1>
        <h2>{number}</h2>
        <h3>바뀌지 않는 값 : {fixedNumber}</h3>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
              }
            );
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
