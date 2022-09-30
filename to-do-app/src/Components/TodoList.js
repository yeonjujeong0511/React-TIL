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
        // TodoListItem 컴포넌트에서 값을 받아서 사용하겠다
        // key값은 todo의 id값으로 할당
      ))}
    </List>
  );
};

export default TodoList;


// 할일들을 배열에 담는 곳
// todolist item을 여기에 불러온다.