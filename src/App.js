import ListandKeysComponents from './componentd/axiosdemo/listandkeys/ListandKeysComponent.js';
import './App.css';
import Hello from './hello.js';
import EvenDemo from './EventDemo.js';
import StateDemo from './StateDemo.js';
import Home from './assignment1.js';
import AxiosGetDemo from './componentd/axiosdemo/axiosGetDemo.js'
import Navbar from './Navbar.js';
import AxiosPostDemo from './componentd/axiosdemo/axiosPostDemo.js';
import ToDoList from './componentd/todolist/ToDoList.js';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <Hello name = "Joey" lastName = "Sing"/>
      <Navbar/>
      <ToDoList />
      <AxiosGetDemo />
     
     

      {/* 
      <Hello name = "Zoe"/>
      <EvenDemo />
      <StateDemo />
      <Home />
      <ListandKeysComponents />
      */}
    </div>
  );
}

export default App;
