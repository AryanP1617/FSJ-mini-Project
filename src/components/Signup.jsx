import React from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

function Signup(){
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();

        const fname=document.getElementById("fname").value.trim()
        const lname=document.getElementById("lname").value.trim()
        const email=document.getElementById("email").value.trim()
        const password=document.getElementById("password").value.trim()
        const branch=document.getElementById("branch").value.trim()
        const division=document.getElementById("division").value.trim()
        const rollnumber=Number(document.getElementById("rollnumber").value.trim())

        if(!fname || !lname || !email || !password||!password||!branch||!division||!rollnumber) {
            alert("Please fill all required fields!");
            return;
        }
        else{
            navigate("/home")
        }
    }
    
      return(
        <>
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="image-area"></div>
                <div className="signup-area">
                    <h1 className="sign">Welcome to Study Sync</h1>
                    <form onSubmit={handleSubmit}>
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
                    
                    <div className="sign-up">
                        <button  type="submit">Sign up</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup