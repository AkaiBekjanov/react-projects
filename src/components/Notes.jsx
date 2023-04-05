import React from "react";
import "./Notes.css"
import { Note } from "./Note";
// hooks
import { useState,useRef} from "react";







const noteAddCss={
    noteDisplay:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width:"300px",
        height:"300px",
        padding:"25px",
        borderRadius: "22px",
        textAlign: "left",
        fontSize: "19.6px",
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: "yellow"
    },
    text:{
          cursor:"pointer",
          outline:"none",
          border:'none',
          backgroundColor:"transparent",
          
}
}




export const Notes=()=>{
   const [notesData,notesAdd]=useState([])
   const [note,noteAdd]=useState();

   //input ref
   const inputRef=useRef();
   

   function updateNotes(){
   



    const newNote={
      id:notesData.length ===0 ? 1: notesData[notesData.length-1].id + 1 ,
   
      text:note
    };
  
   
    notesAdd([...notesData,newNote]);
  
    inputRef.current.value="";
   }


 //deleting
  function deleteNote(id){
     const newNotesData=notesData.filter(x=>{
       if(x.id === id){
        return false;
       }
       return true;
     })
     notesAdd(newNotesData);

  }

  //input handle
  function handleChange(e){
    
   
   noteAdd(e.target.value)
  }

 //random colors for note's background



    return(

          <div className="notes">
            {notesData?.map(x=>
                {return <Note key={x.id} text={x.text}   deleteNote={()=>{deleteNote(x.id)}} />}
                )}

                {/*adding a new note  */}
                <div style={noteAddCss.noteDisplay}>
                       <input
                         ref={inputRef}
                         style={noteAddCss.text}
                         placeholder="type to add new a note..."
                         onChange={handleChange}
                       />
                       <div className="note-footer">
                       <span className="remain">250 remaining</span>
                       <span className="save"
                         onClick={updateNotes}
                       >Save</span>
                      </div>
                </div>   
        </div>
   
    )
}