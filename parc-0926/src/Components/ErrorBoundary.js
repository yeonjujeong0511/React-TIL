import { Component } from 'react';

class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log({ error, info });
  }
// error 파라미터에 어떤 에러가 발생했는지 알려준다.
// info 파라미터는 어디에 있는 코드에서 에러가 발생했는지에 대한 정보


  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundry;
