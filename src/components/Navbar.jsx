import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){

    return (
        <>
           <nav className="navbar">

                <div className="logo">
                    <Link to="/home">Student Dashboard</Link>
                </div>
                <ul className="links">
                    <li><Link to="/attendance">Attendance</Link></li>
                </ul>
           </nav>
        </>
    )
}

export default Navbar