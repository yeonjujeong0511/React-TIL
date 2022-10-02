import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';

const Insert = styled.form`
  display: flex;
  background: #495057;

  & > input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }

  & > button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화
      // submit 이벤트는 브라우저에서 새로고침을 발생
      // 이를 방지하기 위해 이 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  // useCallback -> 한 번 함수를 만들고 재사용할 수 있게 해줌

  return (
    <Insert onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </Insert>
  );
};

export default TodoInsert;

// 할일을 입력하세요
// 일정 추가 부분
