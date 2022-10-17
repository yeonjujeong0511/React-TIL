import styled from 'styled-components';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItemBox = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    & > div:nth-child(1) {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      & > div:nth-child(2) {
        color: #abd5bd;
        text-decoration: line-through;
      }
    }
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }
`;
// 부모 컴포넌트인 TodoList에서 todo를 받아와서 사용
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  // todo의 text와 checked값을 구조분해할당해서 가져와서 사용
  // onRemove함수에서 id값이 필요하니까 또 가져와서 사용한다.
  return (
    <TodoListItemBox>
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {/* checked가 참이면 참 값을 , 거짓이면 거짓값을 보여준다. */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{text}</div>
      </div>
      <div
        onClick={() => {
          onRemove(id);
        }}
      >
        {/*   const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  },[todos]); 
  
  클릭을 하게 되면 id값이 인자로 들억사서 일치하게되어
  해당 클릭값부분만 삭제된다*/}
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemBox>
  );
};

export default TodoListItem;
