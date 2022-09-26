import { Component } from 'react'; // 클래스형 컴포넌트 선언
import PropTypes from 'prop-types';
// 필수 props를 지정하거나 props의 타입을 지정

class MyComponent extends Component {
  static defalultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당

    return (
      <>
        <h1>클래스형 컴포넌트</h1>
        <div>
          안녕하세요, 제 이름은 {name}입니다. <br />
          children 값은 {children} 입니다. <br />
          제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
      </>
    );
  }
}
export default MyComponent;
