import { useCallback, useState } from 'react';

const dataLists = [
  { id: 1, value: 'aaa' },
  { id: 2, data: 'bbb' },
  { id: 3, data: 'ccc' },
];
console.log(dataLists);

const CheckBox = () => {
  const [checkedList, setCheckedLists] = useState([]);

  // 전체 체크 클릭 시 발생하는 함수
  const oncheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        dataLists.forEach((list) => checkedListArray.push(list));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [dataLists]
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  return (
    <>
      <h1>체크박스 전체선택</h1>
      <input
        type='checkbox'
        onChange={(e) => oncheckedAll(e.target.checked)}
        checked={
          checkedList.length === 0
            ? false
            : checkedList.length === dataLists.length
            ? true
            : false
        }
      />
      {dataLists.map((list) => (
        
        <input
          key={list.id}
          type='checkbox'
          onChange={(e) => onCheckedElement(e.target.checked, list)}
          checked={checkedList.includes(list) ? true : false}
          value={list.value}
        ></input>
        
      ))}
    </>
  );
};

export default CheckBox;
