import './App.css';
import MyComponent from '../Components/MyComponent.js';
import Say from '../Components/Say';
import Like from '../Components/Like';
import EventPractice from '../Components/EventPractice';
import List from '../Components/List';
import ValidationSamPle from '../Components/ValidationSample';
import ScrollBox from '../Components/ScrollBox';
import InterationSample from '../Components/InterationSample';

function App() {
  return (
    <>
      <MyComponent>리액트</MyComponent>
      <Say></Say>
      <Like></Like>
      <EventPractice></EventPractice>
      <List></List>
      <ValidationSamPle></ValidationSamPle>
      <ScrollBox></ScrollBox>
      <InterationSample></InterationSample>
    </>
  );
}

export default App;
