import React, { useState } from "react";
import Navbar from './Navbar'
import './Home.css'
import './Attendance.css'
import Checklist from "./Checklist";

function Attendance(){

    const [subjectStatus, setSubjectStatus] = useState({
        DSGT: "white",
        EVS: "white", 
        EM: "white",
        AOA: "white"
    })

    const handleSubmitPresent = (subject) => {
        setSubjectStatus(prev => ({
            ...prev,
            [subject]: "#98ad97"
        }))
    }

    const handleSubmitAbsent = (subject) => {
        setSubjectStatus(prev => ({
            ...prev,
            [subject]: "#d52020"
        }))
    }

    return(
    <>
    <Navbar />
    <div className="wrapper">
        <Checklist />
        <div className="attendance-wrapper">
            <div className="subject-wrapper" style={{backgroundColor: subjectStatus.DSGT}}>
                <div className="subject-name">DSGT</div>
                <button className="present" onClick={() => handleSubmitPresent("DSGT")}>Present</button>
                <button className="absent" onClick={() => handleSubmitAbsent("DSGT")}>Absent</button>
            </div>
            <div className="subject-wrapper" style={{backgroundColor: subjectStatus.EVS}}>
                <div className="subject-name">EVS</div>
                <button className="present" onClick={() => handleSubmitPresent("EVS")}>Present</button>
                <button className="absent" onClick={() => handleSubmitAbsent("EVS")}>Absent</button>
            </div>
            <div className="subject-wrapper" style={{backgroundColor: subjectStatus.EM}}>
                <div className="subject-name">EM</div>  
                <button className="present" onClick={() => handleSubmitPresent("EM")}>Present</button>
                <button className="absent" onClick={() => handleSubmitAbsent("EM")}>Absent</button>
            </div>
            <div className="subject-wrapper" style={{backgroundColor: subjectStatus.AOA}}>
                <div className="subject-name">AOA</div>
                <button className="present" onClick={() => handleSubmitPresent("AOA")}>Present</button>
                <button className="absent" onClick={() => handleSubmitAbsent("AOA")}>Absent</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default Attendance