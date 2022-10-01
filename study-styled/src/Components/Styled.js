import styled, { css, keyframes } from "styled-components";

let isClicked = false;

const Button = styled(isClicked === true ? "div" : "button")`
  width: 150px;
  height: 100px;
  background-color: ${(props) => props.bgc || "pink"};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

const animation = keyframes`
  50% {
    transform: scale(1.3);
  }
  `;

const UpButton = styled(Button)`
  border: none;
  //animation: ${animation} 1s infinite;
  // 애니메이션 스타일링
`;

const Styled = () => {
  return (
    <>
      <h1>연습중</h1>
      <div
        onClick={() => {
          console.log(isClicked);
          isClicked = !isClicked;
        }}
      >
        클릭하세용
      </div>
      <Button bold="true">버튼</Button>
      <Button as="div" bgc="orange">
        버튼2
      </Button>
      <UpButton>버튼3</UpButton>
    </>
  );
};

export default Styled;
