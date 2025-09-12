import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

import './Signup.css'

function Signup(){
    const navigate=useNavigate()
    const { updateUser } = useUser()


    const handleSubmit=(e)=>{
        e.preventDefault();
        const fname = document.getElementById("fname").value.trim()
        const lname = document.getElementById("lname").value.trim()
        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value.trim()
        const branch = document.getElementById("branch").value.trim()
        const division = document.getElementById("division").value.trim()
        const rollnumber = document.getElementById("rollnumber").value.trim()

        const form = e.target;  

        if (!form.checkValidity()) {
        
        const firstInvalid = form.querySelector(":invalid");
        
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInvalid.focus();
        }
        return;
     } 

    
        const userKey = `user_${email}`;
        const existingUser = localStorage.getItem(userKey);
        
        if (existingUser) {
            alert("User with this email already exists! Please login instead.");
            return;
        }

        const userData = {
            fname,
            lname,
            email,
            password,
            branch,
            division,
            rollnumber
        };

        localStorage.setItem(userKey, JSON.stringify(userData));

        updateUser(userData);    
        navigate('/home');
    }

    
    return(
        <>
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="image-area">
                    <img className="signup-image" src="/study-late-night-isolated-cartoo.jpg" alt="study-image" />
                </div>
                <div className="signup-area">
                    <h1 className="sign">Welcome to Study Sync</h1>

                    <div className="signup-form">
                       <form  onSubmit={handleSubmit}>
                        <div className="input">
                            <label className="input-title" htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" placeholder="Enter first name" required/>
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="lname">Last Name:</label>
                            <input type="text" id="lname" placeholder="Enter last name" required />
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter email" required />
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter password" required/>
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="branch">Branch</label>
                            <input type="text" id="branch" placeholder="Enter branch" required />
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="division">Division</label>
                            <input type="text" id="division" placeholder="Enter division" required/>
                        </div>
                        <div className="input">
                            <label className="input-title" htmlFor="rollnumber">Roll number: </label>
                            <input type="text" id="rollnumber" placeholder="Enter roll number" required/>
                        </div>  
                    
                        <button className="sign-up"  type="submit">Sign up</button>

                       </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup