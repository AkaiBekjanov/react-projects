import { useState ,useRef} from 'react'
import Todolist from './todolist.jsx';
import {addTask} from './redux/todoReducer/todoSlice'
import './App.css'
import { useDispatch } from 'react-redux';

function App() {
  const [text,setText]=useState("");
  const inputValue = useRef();
    const handleChange=e=>{
      setText(e.target.value);
    }
  
  const dispatch =useDispatch();  
  

  return (
    <div className="App">
         <div className="container">

        <div>
        <div className="addTask">
          <input  onChange={handleChange} ref={inputValue} placeholder="add todo..."/>
          <button 
            className="btnAdd" onClick={()=>{
              dispatch(addTask(text));
            }}
          >Add Task</button>
         </div>
     
         <Todolist />
        </div>

         {/* <h1
         className='totalTasks'
         >
          Total tasks: {todoList.length} 
          <br />
          
         </h1> */}


         </div>
    </div>
  )
}

export default App
