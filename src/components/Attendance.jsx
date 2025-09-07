import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import './Home.css'
import './Attendance.css'
import Checklist from "./Checklist";
import { useUser } from '../context/UserContext';

function Attendance(){
    const { user, userAttendance, saveUserAttendance } = useUser();
    const [day, setDay] = useState("01/09/2025")
    
    const subjects = {
        "01/09/2025": ["AOA", "DSGT", "COA", "EVS"],
        "02/09/2025": ["MATHS", "DSGT", "ED", "AOA"],
        "03/09/2025": ["OSTL", "FSJP", "COA", "ED"],
        "04/09/2025": ["COA", "FSJP", "AOA", "OSTL"],
        "05/09/2025": ["EVS", "MATHS", "DSGT", "FSJP"]
    }

    const getDayName = (dateString) => {
        const date = new Date(dateString.split('/').reverse().join('-'))
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[date.getDay()]
    }

    const handleAttendance = (subject, status) => {
        const updatedAttendance = {
            ...userAttendance,
            [day]: {
                ...userAttendance[day],
                [subject]: status
            }
        };
        saveUserAttendance(updatedAttendance);
    }

    const getBackgroundColor = (subject) => {
        const currentDayAttendance = userAttendance[day] || {}
        if (currentDayAttendance[subject] === "present") return "#98ad97"
        if (currentDayAttendance[subject] === "absent") return "#d52020"
        return "white"
    }

    const getColor = (subject) => {
        const currentDayAttendance = userAttendance[day] || {}
        if (currentDayAttendance[subject] === "absent") return "#ffffff"
        return "black"
    }

    const calculateAttendancePercentage = () => {
        const subjectStats = {}
        
        const allSubjects = new Set()
        Object.values(subjects).forEach(daySubjects => {
            daySubjects.forEach(subject => allSubjects.add(subject))
        })

        allSubjects.forEach(subject => {
            let totalClasses = 0
            let presentClasses = 0

            Object.entries(subjects).forEach(([date, daySubjects]) => {
                if (daySubjects.includes(subject)) {
                    totalClasses++
                    const dayAttendance = userAttendance[date] || {}
                    if (dayAttendance[subject] === "present") {
                        presentClasses++
                    }
                }
            })

            const percentage = totalClasses > 0 ? (presentClasses / totalClasses) * 100 : 0
            subjectStats[subject] = {
                present: presentClasses,
                total: totalClasses,
                percentage: Math.round(percentage)
            }
        })

        return subjectStats
    }

    const subjectStats = calculateAttendancePercentage()

    // Show login prompt if no user
    if (!user) {
        return (
            <div style={{textAlign: 'center', marginTop: '100px'}}>
                <h2>Please log in to view attendance</h2>
                <button onClick={() => window.location.href = '/login'}>
                    Go to Login
                </button>
            </div>
        );
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
                        onClick={() => setDay(dayName)}
                    >
                        <div className="date-container">
                            <div className="date">{dayName}</div>
                            <div className="day-name">{getDayName(dayName)}</div>
                        </div>
                    </button>
                ))}
            </ul>
        </div>
        <div className="main-wrapper">
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
            
            <div className="stats-panel">
                <h3 className="stats-title">
                    {user.fname}'s Attendance Statistics
                </h3>
                <div className="stats-container">
                    {Object.entries(subjectStats).map(([subject, stats]) => (
                        <div key={subject} className="stat-item">
                            <div className="stat-subject">{subject}</div>
                            <div className="stat-details">
                                <div className="stat-numbers">{stats.present}/{stats.total}</div>
                                <div className={`stat-percentage ${stats.percentage >= 75 ? 'good' : stats.percentage >= 50 ? 'warning' : 'danger'}`}>
                                    {stats.percentage}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Attendance