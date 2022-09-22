import './App.css';
import MyComponent from '../Components/MyComponent.js';
import Say from '../Components/Say';
import Like from '../Components/Like';
import EventPractice from '../Components/EventPractice';
import List from '../Components/List';

function App() {
  return (
    <>
      <MyComponent>리액트</MyComponent>
      <Say></Say>
      <Like></Like>
      <EventPractice></EventPractice>
      <List></List>
    </>
  );
}

export default App;
