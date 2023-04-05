import React from "react";
import "./Input.css"

const styles={maxWidth:"100%",
    background:"grey"    
};

export const Input =()=>{
    return(
        <div className="inputDisplay">
            <img 
            className="search"
            alt="" />
            <input type="text" 
             className="input"
        />
        </div>
    )
}