import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListBox = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
// 부모 컴포넌트에서 받은 todos를 사용
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListBox>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // props로 받아온 todos를 map함수를 이용해서 TodoListItem 으로 보내준다.
        // 객체를 통째로 props로 전달
      ))}
    </TodoListBox>
  );
};

export default TodoList;
