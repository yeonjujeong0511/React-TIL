import Main from "./page/Main";
import Greetings from "./page/Greetings";
import Counter from "./page/Counter";
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <>
      <div>Hello world</div>
      <Main></Main>
      <Greetings name="hello" onClick={onClick}></Greetings>
      <Counter />
    </>
  );
};
export default App;
