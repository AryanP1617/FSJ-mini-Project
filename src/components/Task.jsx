import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Task.css'
import Popup from "./Popup"

function Task (){
    const [isPopupOpen,setIsPopupOpen]=useState(false)
    const [tasks,setTasks]=useState([])
    const[newTask,setNewTask]=useState("")

    const handleSubmit=()=>{
        if(newTask.trim()!==""){
            setTasks([...tasks,newTask])
            setNewTask("")
        }
        setIsPopupOpen(false);
    }

    return (
        <>
            <div className="currwrapper">
                <div className="heading">Task Manager</div>
                <div className="task-screen">
                    {
                        (tasks.length===0)?(
                            <div className="no-tasks">No tasks currently</div>                            
                        ):(
                            <ul>
                            {tasks.map((task,index)=>(
                                <li key={index}>{task}</li>
                            ))}
                            </ul>                            
                        )}
                </div>
                <div className="buttons">
                    <button className="add" onClick={()=>setIsPopupOpen(true)}>Add</button>
                    <button className="delete">Delete</button>                    
                </div>
            </div>


            <Popup isOpen={isPopupOpen} onSubmit={handleSubmit}>
                <h2>Add a new task</h2>
                <input type="text" placeholder="Enter task name" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            </Popup>

        </>
    )
}

export default Task