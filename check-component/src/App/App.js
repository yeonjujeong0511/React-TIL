import { useState } from "react";
import Week from "./Chart/Week";
import Month from "./Chart/Month";
import ThreeMonth from "./Chart/ThreeMonth";
import Year from "./Chart/Year";

const selectComponent = {
  week: <Week />,
  month: <Month />,
  threeMonth: <ThreeMonth />,
  year: <Year />,
};

const MAIN_DATA = [
  {
    id: 1,
    text: "일주일",
    name: "week",
  },
  {
    id: 2,
    text: "한달",
    name: "month",
  },
  {
    id: 3,
    text: "3개월",
    name: "threeMonth",
  },
  {
    id: 4,
    text: "1년",
    name: "year",
  },
];

function App() {
  const [content, setContent] = useState();
  const click = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  return (
    <>
      <div>
        {MAIN_DATA.map((data) => {
          return (
            <button onClick={click} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </>
  );
}

export default App;
