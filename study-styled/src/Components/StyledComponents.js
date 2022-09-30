import styled, { css, keyframes } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
// theme 사용

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.bgColor || 'green'};
  color: ${(props) => props.color || 'white'};
  // props를 이용해서 핸들링 가능
  font-size: 20px;
  ${(props) =>
    props.border &&
    css`
      font-weight: bold;
    `}
    // 조건부 스타일링
`;
const animation = keyframes`
  50% {
    transform: scale(1.3);
  }
  // 애니메이션 할당
  // 속성의 구체적인 내용을 담는 키워드
`;
// 괄호를 이용해 기존의 스타일드 컴포넌트에 스타일링 몇개만 추가하는것
const UpGradeButton = styled(Button)`
  border: 0px;
  text-decoration: line-through;
  //animation: ${animation} 1s infinite;
  // 애니메이션 스타일링
`;

const StyledComponenet = () => {
  return (
    <>
      <Title>스타일드 컴포넌트 이해하기</Title>
      <Button border='true'>선택주문</Button>
      <Button bgColor='white' color='green'>
        전체주문
      </Button>
      <UpGradeButton as='div'>뒤로가기</UpGradeButton>
    </>
  );
};

export default StyledComponenet;
