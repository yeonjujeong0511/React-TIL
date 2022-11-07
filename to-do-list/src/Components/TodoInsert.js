import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';

const Formbox = styled.form`
  display: flex;
  background-color: #495057;
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
  // input에 입력하는 값을 관리하는 value를 만들어주었다
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  // 추가로 input에 넣어줄 함수를 만들어줌
  // usecallback -> 컴포넌트가 리렌더링될때마다 함수를 새로 만드는 것이 아니라
  // 한 번 함수를 만들고 재사용할 수 있게해준다.

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화
      // form의 submit 버튼을 눌렀을때 새로고침 이 발생하니까
      // 그래서 방지하기 위해 아래 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <Formbox onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      {/* value값과 onchange함수를 주었다. */}
      {/* input에 입력된 값이 onInsert함수에 의해
      배열에 새로운 객체로 들어가고, 들어가게 되면 setValue로
      input창이 빈칸이 된다. */}
      <button type="submit">
        {/* submit는 버튼+enter키로도 작동하고, click 이벤트는
        클릭 할때만 작동한다. */}
        <MdAdd />
      </button>
    </Formbox>
  );
};

export default TodoInsert;
