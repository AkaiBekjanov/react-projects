// hooks
import { useState ,useRef} from 'react'
import './App.css'
//cmps
import Todolist from './components/task/todolist.jsx';
import Input from './components/input/Input'
//redux
import {addTask} from './redux/todoReducer/todoSlice'
import { useDispatch } from 'react-redux';

function App() {
  

  
  return (
    <div className="App">
         <div className="container">


       
        <div>
         <Input />
         <Todolist />
        </div>

         </div>
    </div>
  )
}

export default App
