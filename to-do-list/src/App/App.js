import './App.css';
import TodoTemplate from '../Components/TodoTemplate';
import styled from 'styled-components';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import { useCallback, useRef, useState } from 'react';

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  // 일정을 배열에 담아주었다.

  const nextId = useRef(4);
  // 객체가 새로 생겨서 새로 id 값이 필요하니끼
  // ref를 사용하여 변수를 담았다.
  // usestate가 아니라 useRef담은 것은
  // id값은 렌더링되는 정보가 아니기 때문

  // 함수의 성능을 아낄 수 있도록, useCallback으로 감싸주었다.
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

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <MainBox>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        {/* onInsert함수를 TodoInsert에서 사용하기위해 porps로 전달 */}
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoList>
        {/* todos를 TodoList에서 쓰기위해 porps로 전달 */}
        {/* onInsert함수를 TodoList에서 사용하기 위해 porps로 전달 */}
        {/* onInsert함수와 똑같이 onToggle함수를 TodoList에서 사용하기 위해 porps로 전달 */}
      </TodoTemplate>
    </MainBox>
  );
}

export default App;
