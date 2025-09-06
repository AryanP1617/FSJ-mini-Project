import React, { useState } from "react";
import Navbar from './Navbar'
import './Home.css'
import './Attendance.css'
import Checklist from "./Checklist";

function Attendance(){

    const [day, setDay] = useState("01/09/2025")

    const handleReset = () => {
        setAttendance({})
    }
    
    const subjects = {
        "01/09/2025": ["AOA", "DSGT", "COA", "EVS"],
        "02/09/2025": ["MATHS", "DSGT", "ED", "AOA"],
        "03/09/2025": ["OSTL", "FSJP", "COA", "ED"],
        "04/09/2025": ["COA", "FSJP", "AOA", "OSTL"],
        "05/09/2025": ["EVS", "MATHS", "DSGT", "FSJP"]
    }

    const [attendance, setAttendance] = useState({})

    const handleAttendance = (subject, status) => {
        setAttendance(prev => ({
            ...prev,
            [subject]: status
        }))
    }

    const getBackgroundColor = (subject) => {
        if (attendance[subject] === "present") return "#98ad97"
        if (attendance[subject] === "absent") return "#d52020"
        return "white"
    }

    const getColor=(subject)=>{
        if(attendance[subject]==="absent") return "#ffffff"
        return "black"
    }

    return(
    <>
    <Navbar />
    <div className="day-list">
        <ul className="outer-day-list">
            {Object.keys(subjects).map(dayName => (
                <button 
                    key={dayName}
                    className={`list-item ${day === dayName ? 'active' : ''}`}
                    onClick={() => {setDay(dayName); handleReset();}}
                >
                    {dayName}
                </button>
            ))}
        </ul>
    </div>
    <div className="wrapper">
        <Checklist />
        <div className="attendance-wrapper">
            {subjects[day].map((subject, index) => (
                <div 
                    key={subject}
                    className="subject-wrapper" 
                    style={{backgroundColor: getBackgroundColor(subject)}}
                >
                    <div className="subject-name" style={{color:getColor(subject)}}>{subject}</div>
                    <button
                        className="present" 
                        onClick={() => handleAttendance(subject, "present")}
                    >
                        Present
                    </button>
                    <button 
                        className="absent" 
                        onClick={() => handleAttendance(subject, "absent")}
                    >
                        Absent
                    </button>
                </div>
            ))}
        </div>
    </div>
    </>
    )
}

export default Attendance