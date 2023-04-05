import React from "react";
import { useDispatch } from 'react-redux';
import {deleteTask,completeTask} from '../../redux/todoReducer/todoSlice'
import "./Task.css"


const Task=(props)=>{
    const {taskName,id,isCompleted}=props;
    const dispatch =useDispatch();  
  
    
    return(
        <div
         className="task"
       
        >
               <input type="checkbox" checked={isCompleted ? true:false} className="checkbox"
                 onChange={()=>{
                    dispatch(completeTask(id));
                  
                 }}
               />
                <h1
                 className="taskName"
                 style={isCompleted  ?{textDecoration:"line-through", textDecorationColor: "red"} :null}
                >{taskName}</h1>
                <button className='deleteBtn'
                onClick={()=>{
                 dispatch(deleteTask(id));
                }}
                >Delete</button>
                   
        </div>
    )
}

export default Task;