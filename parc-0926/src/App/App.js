import './App.css';
import MyComponent from '../Components/MyComponet';
import Counter from '../Components/Counter';
import ClickEvent from '../Components/ClickEvent';
import LifeCylcleSample from '../Components/LifeCycleSample';
import { Component } from 'react';
import ErrorBoundry from '../Components/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = { color: '#000000' };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };
  render() {
    return (
      <>
        <MyComponent></MyComponent>
        <Counter></Counter>
        <ClickEvent></ClickEvent>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundry>
        <LifeCylcleSample color={this.state.color}></LifeCylcleSample>
        </ErrorBoundry>
      </>
    );
  }
}

export default App;
