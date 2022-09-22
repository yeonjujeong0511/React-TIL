import PropTypes from 'prop-types';

function MyComponent({ name, children }) {
  return (
    <>
      <h1>안녕하세요. 저는 {name}입니다.</h1>
      <p>children값은 {children} 입니다.</p>
    </>
  );
}

MyComponent.defaultProps = {
  name: '기본이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
};
export default MyComponent;
