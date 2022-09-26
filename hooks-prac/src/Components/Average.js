import { useState, useMemo, useCallback, useRef } from "react";

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
  const inPutEl = useRef(null);
  // list와 number의 초깃값 설정
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inPutEl.current.focus();
  }, [number, list]);
  // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo 메서드
  return (
    <>
      <h1>useMemo 학습</h1>
      <input value={number} onChange={onChange} ref={inPutEl}></input>
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
