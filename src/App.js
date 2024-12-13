import logo from './logo.svg';
import './App.css';
import Hello from './hello.js';
import EvenDemo from './EventDemo.js';
import StateDemo from './StateDemo.js';
import Home from './assignment1.js';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <Hello name = "Joey" lastName = "Sing"/>
      <Hello name = "Zoe"/>
      <EvenDemo />
      <StateDemo />
      <Home />
    </div>
  );
}

export default App;
