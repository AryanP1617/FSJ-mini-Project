import React from "react";
import "./Pass.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()

  const handleError = () => {
        const message = document.getElementById("error-message")
        message.innerText = "You have entered wrong login credentials!"
        message.style.color = "red"
      }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = "aryan@gmail.com"
    const userPassword = "123456"

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email) {
      alert("Please enter Email!");
      return;
    }
    if (!password) {
      alert("Please enter your Password!");
      return;
    }

    if(email === userEmail && password === userPassword) {
      navigate("/home")
    }
    else if(email !== userEmail || password !== userPassword){
      handleError()
    }
    
    
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Sign in with Email</h1>
        <p className="subtitle">
          Your all-in-one hub to track, manage, and excel in your academic journey.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password"
              minLength={6}
              required
            />
          </div>
          <div id="error-message"></div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <img
        className="side-image"
        src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-svg-png-download-6430849.png"
        alt="Sign Up Illustration"
      />
    </div>
  );
}

export default Login;
