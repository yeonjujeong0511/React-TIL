import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
// 부모 컴포넌트에서 받은 todo를 사용
const TodoList = ({ todos, onRemove, onToggle }) => {
  // console.log(todos);
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
