import {createSlice} from "@reduxjs/toolkit";
  

  // const deleteTask=(id)=>{
     
    //   setTodoList(todoList.filter(task=>task.id != id));
    //   setTotalTasks(totalTasks-1)
    // }

const todoSlice= createSlice({

    name:"todolist",
    initialState:{
        todolist:[]
    },
    reducers:{
        addTask(state,action){
            if(!action){
              return 
            }
         
            state.todolist.push({
                id:state.todolist.length === 0 ? 1 : state.todolist.length + 1,
                isCompleted:false,
                taskName:action.payload
            })
            
        
            
         
          },
    
    
      deleteTask(state,action){
       state.todolist = state.todolist.filter(task=>task.id != action.payload);
      }


    }
      
    
})


export const {addTask,deleteTask} = todoSlice.actions;

export default todoSlice.reducer;