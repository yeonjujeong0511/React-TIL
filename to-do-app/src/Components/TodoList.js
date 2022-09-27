import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  // console.log(todos);
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </List>
  );
};

export default TodoList;
