import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  // props값 지정이 없으면 배경색은 'blue'
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  // 반응형 디자인도 가능하다
  // 미디어 쿼리를 이용
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768x) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  // inverted값이 ture일때, 특정 스타일링을 부여해준다.
  ${(props) =>
    props.inverted &&
    css`
      backgournd: none;
      border: 2px solid white;
      color: white;

      &:hover {
        backgound: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color='black'>
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
