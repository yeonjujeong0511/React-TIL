import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  // 함수선언, 매개변수 numbers
  console.log("평균값 계산중..");
  // 함수가 호출될때마다, 콘솔에 위에 내용을 보여준다.
  if (numbers.length === 0) return 0;
  // numbers의 개수가 0개면 0을 리턴
  const sum = numbers.reduce((a, b) => a + b);
  // numbers의 각 요소들을 더한다.
  return sum / numbers.length;
  // 각 요소들을 더한 sum에  numbers의 개수를 나눈다.
  // 그럼 평균값이 나온다.
};

function Average() {
  // 컴포넌트 Average
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // list와 number의 초깃값 설정
  const onChange = (e) => setNumber(e.target.value);
  // onChanme 함수가 실행되면 number에 함수실행한 곳에 값을 할당
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    // 함수가 실행되면, list의 요소들에 number값을 정수로 변환해서 새 배열인 nextList를 만든다.
    setList(nextList);
    // list는 nextList로 재할당
    setNumber("");
    // number값은 다시 빈칸이 된다.
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo 메서드
  return (
    <>
      <h1>useMemo 학습</h1>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:{avg}</b>
      </div>
    </>
  );
}

export default Average;
