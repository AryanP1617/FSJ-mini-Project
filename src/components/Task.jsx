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
            setTasks([...tasks,{text:newTask,done:false}])
            setNewTask("")
        }
        setIsPopupOpen(false);
    }

    const toggleTask=(index)=>{         
        const updatedTasks=tasks.map((task,i)=>
            i===index?{...task,done:!task.done}:task)

        setTasks(updatedTasks)
    }

    const handleDelete=()=>{
        setTasks(tasks.filter((task)=>!task.done))
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
                            <ul className="overall-task">
                            {tasks.map((task,index)=>(
                                <li key={index} className="task-item">
                                    <span className="task-text">{task.text}</span>
                                    <input className="task-checkbox" type="checkbox" checked={task.done} onChange={()=>toggleTask(index)} />                                
                                
                                </li>
                            ))}
                            </ul>                            
                        )}
                </div>
                <div className="buttons">
                    <button className="add" onClick={()=>setIsPopupOpen(true)}></button>
                    <button className="delete" onClick={handleDelete}></button>                    
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