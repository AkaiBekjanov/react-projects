import { useState } from "react";
import {useSelector} from 'react-redux';
import Task from './Task'


 const Todolist=()=>{
    const [newTask,setNewTask]=useState("");
   
    const todos=useSelector(state=>state.todo.todolist);
    
  
    
    //   setTodoList([...todoList,task]);
  
    //   inputValue.current.value="";
    //   setNewTask("");
   
    // }
  
    // //removing
    // const deleteTask=(id)=>{
     
    //   setTodoList(todoList.filter(task=>task.id != id));
    //   setTotalTasks(totalTasks-1)
    // }
  
    // const completeTask=(id)=>{
      
    //  setTodoList(
    //   todoList.map(item=>{
    //   if(item.id === id){
        
    //     return{...item,isCompleted:!item.isCompleted}
    //   }else{
        
    //     return item;
    //   }
    //  })
     
    //  )
  
   
    
  
             
  
    // }



    return (
    
    <div className="list ">
    {
      todos.map((task)=>{
        return(
           <Task {...task} key={task.id}/>
        )
      })
    }

</div>

)
}


export default  Todolist;