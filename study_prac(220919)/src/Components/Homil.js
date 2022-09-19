import { useContext } from 'react';
import { data } from '../App/App.js';

const Homil = () => {
  const bye = useContext(data);
  // console.log(bye);
  return (
    <>
      <ul>
        <li>호밀</li>
        <li>현미</li>
        <li>율무</li>
      </ul>
      <h2>{bye}</h2>
    </>
  );
};

export default Homil;
