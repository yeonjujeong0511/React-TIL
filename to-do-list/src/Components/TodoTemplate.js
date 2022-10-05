import { Children } from 'react';
import styled from 'styled-components';

const TodoList = styled.div`
  width: 512px;
`;
const Title = styled.div`
  width: inherit;
  height: 50px;
  background-color: lightcoral;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;
const Content = styled.div`
  width: inherit;
  height: 25px;
  background-color: lightgrey;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoList>
      <Title>일정관리</Title>
      <Content>{children}</Content>
    </TodoList>
  );
};

export default TodoTemplate;
