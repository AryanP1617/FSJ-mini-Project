import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Task.css'
import Popup from "./Popup"

function Task (){
    const [isPopupOpen,setIsPopupOpen]=useState(false)

    const handleSubmit=()=>{
        setIsPopupOpen(false);
    }

    return (
        <>
            <div className="currwrapper">
                <div className="heading">Task Manager</div>
                <div className="task-screen"></div>
                <div className="buttons">
                    <button className="add" onClick={()=>setIsPopupOpen(true)}>Add</button>
                    <button className="delete">Delete</button>                    
                </div>
            </div>


            <Popup isOpen={isPopupOpen} onSubmit={handleSubmit}>
                <h2>Add a new task</h2>
                <input type="text" placeholder="Enter task name" />
            </Popup>

        </>
    )
}

export default Task