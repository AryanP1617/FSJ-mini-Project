import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import './UserCard.css';

function UserCard() {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const defaultUser = {
        fname: "Guest",
        lname: "User",
        branch: "N/A",
        division: "N/A",
        rollnumber: "N/A"
    };

    const displayUser = user || defaultUser;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="user-card">
            <div className="user-card-header">
                <div className="user-avatar">
                    {displayUser.fname.charAt(0)}{displayUser.lname.charAt(0)}
                </div>
                <div className="user-name">
                    {displayUser.fname} {displayUser.lname}
                </div>
            </div>
            
            <div className="user-details">
                <div className="detail-item">
                    <span className="detail-label">Branch:</span>
                    <span className="detail-value">{displayUser.branch}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Division:</span>
                    <span className="detail-value">{displayUser.division}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Roll Number:</span>
                    <span className="detail-value">{displayUser.rollnumber}</span>
                </div>
            </div>
            
            <div className="user-status">
                <div className="status-indicator active"></div>
                <span className="status-text">Active</span>
            </div>

            {user && (
                <div className="logout-section">
                    <button 
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserCard;