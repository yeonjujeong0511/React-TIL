import { useState } from "react";

function InterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputData, setInputData] = useState("");
  const [nextID, setNextId] = useState(5);

  const onChange = (e) => setInputData(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextID,
      text: inputData,
    });
    setNextId(nextID + 1);
    setNames(nextNames);
    setInputData("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <h1>컴포넌트반복</h1>
      <input value={inputData} onChange={onChange}></input>
      <button onClick={onClick}>추가버튼</button>
      <ul>{nameList}</ul>
    </>
  );
}

export default InterationSample;
