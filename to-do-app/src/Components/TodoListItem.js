import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from 'styled-components';
import cn from 'classnames';

const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1; // 차지 할 수 있는 영역 모두 차지
  display: flex;
  align-items: center;
  svg {
    // 아이콘
    font-size: 1.5rem;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    & > .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지 할 수 있는 모든 영역 차지
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <ListItem>
      <CheckBox className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text className="text">{text}</Text>
      </CheckBox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </ListItem>
  );
};

export default TodoListItem;
