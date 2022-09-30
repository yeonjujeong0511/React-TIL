import TodoTemplate from '../Components/TodoTemplate';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import { useCallback, useRef, useState } from 'react';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  // 받아올 데이터가 없으니까 일단 객체로 할 일을 받아놓는다.

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
        {/* TodoInsert 와 TodoList를 children으로 받는다. */}
      </TodoTemplate>
    </>
  );
}

export default App;
