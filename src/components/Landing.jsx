import React from "react";
import "./Landing.css";
import { Navigate, useNavigate } from "react-router-dom";


function Landing() {
    const navigate=useNavigate();
    const handleLogin = () => {
        
        
        navigate('/login')
    };

    const handleSignup = () => {
        navigate('/signup')
    };

    return (
        <div className="hero">
            <nav className="nav">
                <div className="nav-logo">
                    StudySync
                </div>
                <div className="nav-buttons">
                    <button 
                        onClick={handleLogin}
                        className="btn btn-login"
                    >
                        Login
                    </button>
                    <button 
                        onClick={handleSignup}
                        className="btn btn-signup"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            <div className="main-content">
                <div className="content-container">
                    <div className="text-content">
                        <h1 className="main-title">
                            Your Academic Journey,
                            <span className="title-highlight"> Simplified</span>
                        </h1>
                        
                        <p className="main-description">
                            Track attendance, manage assignments, monitor grades, and stay on top of your academic life with our all-in-one student dashboard.
                        </p>

                        <div className="cta-section">
                            <button 
                                onClick={handleSignup}
                                className="btn btn-get-started"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="image-content">
                        <img 
                            className="hero-image"
                            src="https://i.pinimg.com/736x/a4/c6/1b/a4c61bb2fcd735f198bd67144c0c2864.jpg" 
                            alt="StudySync Dashboard Preview" 
                        />
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="features-container">
                    <h2 className="features-title">
                        Everything you need to excel academically!
                    </h2>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>🗓️</span>
                            </div>
                            <h3 className="feature-title">Attendance Tracking</h3>
                            <p className="feature-description">
                                Never miss a class. Track your attendance across all subjects and get alerts for low attendance.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>📚</span>
                            </div>
                            <h3 className="feature-title">Task Manager</h3>
                            <p className="feature-description">
                                Keep track of all your assignments, deadlines, and submissions in one organized place.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">StudySync</div>
                    <p className="footer-text">© 2025 StudySync. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Landing;