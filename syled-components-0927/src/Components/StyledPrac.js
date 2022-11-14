import styled from "styled-components";

const Title = styled.h1`
  width: 500px;
  height: 50px;
  background: ${(props) => props.bgc || "orange"};
  color: white;
  text-align: center;
`;

const Box = styled.div`
  width: 500px;
  height: 300px;
  border: 3px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    width: 150px;
    height: 60px;
    font-weight: 600;
    background: skyblue;
    color: white;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
  }
  & > button:hover {
    border: 2px solid cadetblue;
  }
`;

const StyledPrac = () => {
  return (
    <>
      <Title bgc="black">styled-Component</Title>
      <Box>
        <button>여기를 눌러주세요</button>
      </Box>
    </>
  );
};

export default StyledPrac;
