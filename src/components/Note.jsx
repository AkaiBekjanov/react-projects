import React from "react";

import "./Note.css"

export const Note=(props)=>{
  
    return(
        <div className="note"  style={{backgroundColor:"rgba(11,244,99)"}}>
            <p>{props.text}</p>
            <div className="note-footer">
                <span className="data">09.04.23</span>
                <span className="delete-icon" onClick={props.deleteNote}>X</span>
            </div>
        </div>
    )
}