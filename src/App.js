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
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
      <div className="app">
        <Navbar/>
      </div>

       <Routes>
        <Route path='/hello' element={<Hello/>}/>
        <Route path='/sdc' element={<StateDemo/>}/>
        <Route path='/getposts' element={<AxiosGetDemo/>}/>
        <Route path='/todolist' element={<ToDoList/>}/>
       </Routes>
      </Router>
    
  );
}

export default App;
