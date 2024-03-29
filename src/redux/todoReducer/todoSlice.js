import {createSlice} from "@reduxjs/toolkit";
  

  // const deleteTask=(id)=>{
     
    //   setTodoList(todoList.filter(task=>task.id != id));
    //   setTotalTasks(totalTasks-1)
    // }



const todoSlice= createSlice({

    name:"todolist",
    initialState:{
        todolist: JSON.parse(localStorage.getItem("todolist")) || []
    },
    reducers:{
        addTask(state,action){
            if(!action.payload){
              return 
            }
         
            state.todolist.push({
                id:state.todolist.length === 0 ? 1 : state.todolist.length + 1,
                isCompleted:false,
                taskName:action.payload
            })
            localStorage.setItem("todolist",JSON.stringify(state.todolist))
         
            
        
            
         
          },
    
    
      deleteTask(state,action){
       state.todolist = state.todolist.filter(task=>task.id != action.payload);
      },
      completeTask(state,action){
        state.todolist=state.todolist.map(x=>{
          if(x.id == action.payload){
             return {...x,isCompleted:!x.isCompleted};
          }else{
            return x;
          }
        })
      }


    }
      
    
})


export const {addTask,deleteTask,completeTask} = todoSlice.actions;

export default todoSlice.reducer;