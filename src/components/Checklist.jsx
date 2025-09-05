import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Checklist.css'

function Checklist(){

    return(
        <>
        <div className="timeline-container">
            <div className="timeline-item">
                <div className="circle">
                    <img src="public/check-svgrepo-com.svg" alt="check-mark" />
                </div>
                <div className="line"></div>
            </div>

            <div className="timeline-item">
                <div className="circle">
                    <img src="public/check-svgrepo-com.svg" alt="check-mark" />
                </div>
                <div className="line"></div>
            </div>

            <div className="timeline-item">
                <div className="circle">
                    <img src="public/check-svgrepo-com.svg" alt="check-mark" />
                </div>
                <div className="line"></div>
                
            </div>
            
            <div className="timeline-item">
                <div className="circle">
                    <img src="public/check-svgrepo-com.svg" alt="check-mark" />
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Checklist