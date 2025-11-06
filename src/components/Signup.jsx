import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import { useState } from "react";

import './Signup.css'

function Signup(){
    const navigate=useNavigate()
    const { updateUser } = useUser()

    const [step, setStep] = useState(1);

     const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        branch: "",
        division: "",
        rollnumber: "",
      })

          const handleChange = (e) => {
            const { id, value } = e.target
            setFormData((prevData) => ({
            ...prevData,
            [id]: value,
            }))
          }

    const handleSubmit=(e)=>{
        e.preventDefault();
        for (const key in formData) {
        if (!formData[key].trim()) {
          alert(`Please fill out the ${key} field.`);
          return;
        }
      }    
        
      const userKey = `user_${formData.email}`;
      const existingUser = localStorage.getItem(userKey);
        
        if (existingUser) {
            alert("User with this email already exists! Please login instead.");
            return;
        }

        
        localStorage.setItem(userKey, JSON.stringify(formData));

        updateUser(formData);    
        navigate('/home');
    }

    
    return(
        <>
        <div className="signup-container">
      <div className="signup-wrapper">
        <div className="image-area">
          <img
            className="signup-image"
            src="/study-late-night-isolated-cartoo.jpg"
            alt="study"
          />
        </div>
        <div className="signup-area">
          <h1 className="sign">Welcome to Study Sync</h1>

          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                <div className="form-1">
                  <div className="input">
                    <label className="input-title" htmlFor="fname">
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="input">
                    <label className="input-title" htmlFor="lname">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <div className="input">
                    <label className="input-title" htmlFor="email">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="input">
                    <label className="input-title" htmlFor="password">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <button
                    className="next"
                    type="button"
                    onClick={() => setStep(2)}
                  >
                    Next →
                  </button>
                </div>
                </>
              )}

              {step === 2 && (
                <>
                <div className="form-2">
                  <div className="input">
                    <label className="input-title" htmlFor="branch">
                      Branch
                    </label>
                    <input
                      type="text"
                      id="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      placeholder="Enter branch"
                      required
                    />
                  </div>
                  <div className="input">
                    <label className="input-title" htmlFor="division">
                      Division
                    </label>
                    <input
                      type="text"
                      id="division"
                      value={formData.division}
                      onChange={handleChange}
                      placeholder="Enter division"
                      required
                    />
                  </div>
                  <div className="input">
                    <label className="input-title" htmlFor="rollnumber">
                      Roll number:
                    </label>
                    <input
                      type="text"
                      id="rollnumber"
                      value={formData.rollnumber}
                      onChange={handleChange}
                      placeholder="Enter roll number"
                      required
                    />
                  </div>

                  <div className="form-buttons">
                    <button
                      type="button"
                      className="back"
                      onClick={() => setStep(1)}
                    >
                      ← Back
                    </button>
                    <button className="sign-up" type="submit">
                      Sign up
                    </button>
                  </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
        </div>
        </div>
  

        </>
    )
}

export default Signup