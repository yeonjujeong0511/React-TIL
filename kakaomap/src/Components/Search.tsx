import { useState } from "react";
import Map from "./Map";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onchange = (e: any) => {
    setInputText(e.target.value);
  };

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handlesubmit}>
        <input
          placeholder="장소를 입력해주세요"
          onChange={onchange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </form>
      <Map searchPlace={place}></Map>
    </>
  );
};

export default Search;
