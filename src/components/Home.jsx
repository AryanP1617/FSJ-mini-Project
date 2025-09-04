import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Task from './Task'
import './Home.css'


function Home (){
    
    return (
        <>
            <Navbar />
            <div className="components">
                <div className="utilities">
                <Task />
                <div className="attendance"></div>
                </div>
                <div className="heatmap">heatmap</div>
            </div>
            
           {/* <div>Home</div> */}
        </>
    )
}

export default Home