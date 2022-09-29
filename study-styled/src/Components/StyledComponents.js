import styled, { css, keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.bgColor || "green"};
  color: ${(props) => props.color || "white"};
  font-size: 20px;
  ${(props) =>
    props.inverted &&
    css`
      font-weight: bold;
    `}
`;
const animation = keyframes`
  50% {
    transform: scale(1.3);
  }
`;
const UpGradeButton = styled(Button)`
  border: 0px;
  text-decoration: line-through;
  //animation: ${animation} 1s infinite;
`;

const StyledComponenet = () => {
  return (
    <>
      <Title>스타일드 컴포넌트 이해하기</Title>
      <Button inverted="true">선택주문</Button>
      <Button bgColor="white" color="green">
        전체주문
      </Button>
      <UpGradeButton as="div">뒤로가기</UpGradeButton>
    </>
  );
};

export default StyledComponenet;
