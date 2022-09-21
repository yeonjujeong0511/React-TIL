import { useState } from 'react';

function Task() {
  const [study, setStudy] = useState([
    { id: 1, content: 'js공부' },
    { id: 2, content: 'react공부' },
    { id: 3, content: '페이지 설계' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextStudy = study.concat({
      id: nextId,
      content: inputText,
    });
    setNextId(nextId + 1);
    setStudy(nextStudy);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextStudy = study.filter((study) => study.id !== id);
    setStudy(nextStudy);
  };

  const studyList = study.map((study) => (
    <li key={study.id} onClick={() => onRemove(study.id)}>
      {study.content}
    </li>
  ));
  return (
    <>
      <h1>공부</h1>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{studyList}</ul>
    </>
  );
}

export default Task;
