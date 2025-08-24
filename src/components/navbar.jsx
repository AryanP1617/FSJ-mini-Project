import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){

    return (
        <>
           <nav className="navbar">

                <div className="logo">Student Dashboard</div>
                <ul className="links">
                    <li><Link to="/home">Attendance</Link></li>
                    <li><Link to="/assignments">Assignments</Link></li>
                </ul>
           </nav>
        </>
    )
}

export default Navbar