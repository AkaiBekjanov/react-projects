import { useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from '../../redux/todoReducer/todoSlice'
 const Input =()=>{
    const dispatch =useDispatch();  

    const [text,setText]=useState("");
      const handleChange=e=>{
        setText(e.target.value);
      }
    
    return(
        <div className="addTask">
        <input  onChange={handleChange}  placeholder="add todo..."/>
        <button 
          className="btnAdd" onClick={()=>{
            dispatch(addTask(text));
          }}
        >Add Task</button>
       </div>
    )
}
export default Input;