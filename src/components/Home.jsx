import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Task from './Task'
import './Home.css'


function Home (){
    
    return (
        <>
            <Navbar />
            <Task />
           {/* <div>Home</div> */}
        </>
    )
}

export default Home