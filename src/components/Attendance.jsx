import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import './Home.css'
import './Attendance.css'

function Attendance(){

    // const [color,setColor] = useState("white")
    // onClick={setColor="green"}
    return(<>
    <Navbar />
    <div className="attendance-wrapper">
        <div className="subject-wrapper">
            <div className="subject-name">DSGT</div>
            <button className="present" >Present</button>
            <button className="absent">Absent</button>
        </div>
        <div className="subject-wrapper">
            <div className="subject-name">EVS</div>
            <button className="present">Present</button>
            <button className="absent">Absent</button>
        </div>
        <div className="subject-wrapper">
            <div className="subject-name">EM</div>  
            <button className="present">Present</button>
            <button className="absent">Absent</button>
        </div>
        <div className="subject-wrapper">
            <div className="subject-name">AOA</div>
            <button className="present">Present</button>
            <button className="absent">Absent</button>
        </div>
    </div>
    
    
    </>)
}

export default Attendance
