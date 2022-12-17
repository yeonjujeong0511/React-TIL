// ! 컨테이너 컴포넌트 만들기
// ! 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고,
// ! 액션도 디스패치해 줄 차례
// ! 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 한다.

import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CouterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// * 컴포넌트를 리덕스와 연동하려면 리액트리덕스에서 제공하는 connect 함수를 사용해야한다.
// * connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

// ** 방법1 ** //
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   // 임시함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CouterContainer);

// ** 방법2 ** //
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CouterContainer);

// ** 방법3 ** //
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CouterContainer);
