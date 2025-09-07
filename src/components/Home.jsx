import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Task from './Task'
import UserCard from './UserCard'
import { useUser } from '../context/UserContext'
import './Home.css'

function Home (){
    const { user } = useUser();
    
    return (
        <>
            <Navbar />
            <div className="components">
                {user ? (
                    <div className="welcome-section">
                        <h2 className="welcome-message">
                            Welcome back, {user.fname}! 👋
                        </h2>
                        <p className="welcome-subtitle">
                            Ready to track your academic progress today?
                        </p>
                    </div>
                ) : (
                    <div className="welcome-section">
                        <h2 className="welcome-message">
                            Welcome to StudySync! 📚
                        </h2>
                        <p className="welcome-subtitle">
                            Please log in to access your personalized dashboard and track your attendance.
                        </p>
                    </div>
                )}
                <div className="utilities">
                    <Task />
                    <UserCard />
                </div>
                
            </div>
        </>
    )
}

export default Home