import React from "react";
import { useNavigate } from "react-router-dom";
import './Task.css'

function Task (){
    
    return (
        <>
            <div className="currwrapper">
                <div className="heading">Task Manager</div>
                <div className="task-screen"></div>
                <div className="buttons">
                    <button className="add">Add</button>
                    <button className="delete">Delete</button>                    
                </div>
            </div>
        </>
    )
}

export default Task