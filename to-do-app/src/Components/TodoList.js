import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <List>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </List>
  );
};

export default TodoList;

// 할일들을 배열에 담는 곳
// todolist item을 여기에 불러온다.
