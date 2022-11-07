import { useState } from 'react';

const Select = () => {
  const [region, setRegion] = useState('경기도');
  const [regionEng, setRegionEng] = useState('gyeongygi');

  const onchangeRegion = (e) => {
    setRegionEng(e.target.value);
    setRegion(e.target[e.target.selectedIndex].text);
    console.log(e.target[e.target.selectedIndex].text);
  };

  return (
    <>
      <h1>select</h1>
      <select onChange={onchangeRegion}>
        <option value='gyeonggi'>경기도</option>
        <option value='gangwon'>강원도</option>
        <option value='chungcheongbuckdo'>충청북도</option>
      </select>
      <h2>영어이름 :{regionEng}</h2>
      <h2>지역 : {region}</h2>
    </>
  );
};

export default Select;
