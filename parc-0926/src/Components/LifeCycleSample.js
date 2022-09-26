import { Component } from 'react';

class LifeCylcleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  // state 초깃값 설정
  myRef = null;
  // ref 초깃값 설정

  constructor(props) {
    super(props);
    console.log('counstructor');
  }
  // 컴포넌트의 생성자 메서드
  // 컴포넌트를 만들 때, 처음으로 실행
  // 초기 state를 정할 수 있음

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      // 조건에 따라 특정 값 동기화
      return { color: nextProps.color };
    }
    return null; // state를 변경할 필요가 없다면 null을 반환
  }
  // props로 받아 온 값을 state에 동기화시키는 용도로 사용
  // 컴포넌트가 마운트될 때와 업데이트할때 호출

  componentDidMount() {
    console.log('componentDidMount');
  }
  //첫 렌더링을 다 마친 후 실행
  // 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나
  // 이벤트 등록,setTimeout, sestInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  // props 또는 state를 변경했을때, 리렌더링을 시작할지 여부를지정하는 메서드
  // 반드시 true 값 또는 false값을 반환해야한다.
  // false값을 반환하면 업데이트 과정은 여기서 중지

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // 컴포넌트를 DOM에서 제거할 때 실행
  // componentDidMout에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  // componentDidUpdate에 세번째 파라미터인 snapshot값으로 전달 받을 수 있다

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }
  // 리렌더링을 완료한 후 실행

  render() {
    // 유일한 필수 메서드 // 메서드 안에서 this.props와 this.state에 접근할 수 있다.
    console.log('render');

    const style = { color: this.props.color };

    return (
      <>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {/* 콜백함수로 ref 설정 */}
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </>
    );
  }
}

export default LifeCylcleSample;
