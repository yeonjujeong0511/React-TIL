import { useState } from 'react';
function Number() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [key, setKey] = useState(6);

  const add = () => {
    let newList = data.concat(key);
    setData(newList);
    setKey(key + 1);
  };

  let list = data.map((value) => <div key={value}>{value}</div>);
  console.log(list);

  return (
    <>
      <h1>숫자</h1>
      <button onClick={add}>추가</button>
      {list}
    </>
  );
}

export default Number;
