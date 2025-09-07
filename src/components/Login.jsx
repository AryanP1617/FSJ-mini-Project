import React from "react";
import "./Pass.css";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

function Login() {
    const navigate = useNavigate()
    const { updateUser } = useUser()

    const handleError = () => {
        const message = document.getElementById("error-message")
        message.innerText = "You have entered wrong login credentials!"
        message.style.color = "red"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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

        const userKey = `user_${email}`;
        const savedUser = localStorage.getItem(userKey);

        if (savedUser) {
            const userData = JSON.parse(savedUser);
            
            if (userData.password === password) {
                const { password: _, ...userInfo } = userData;
                updateUser(userData);
                navigate("/home");
            } else {
                handleError();
            }
        } else {
            const demoUsers = [
                {
                    email: "aryan@gmail.com",
                    password: "123456",
                    fname: "Aryan",
                    lname: "Punalekar",
                    branch: "Computer Engineering",
                    division: "C23",
                    rollnumber: "127"
                },
                {
                    email: "tejas@gmail.com", 
                    password: "123456",
                    fname: "Tejas",
                    lname: "Pathak",
                    branch: "Computer Engineering", 
                    division: "C23",
                    rollnumber: "119"
                }
            ];

            const foundUser = demoUsers.find(user => 
                user.email === email && user.password === password
            );

            if (foundUser) {
                updateUser(foundUser);
                navigate("/home");
            } else {
                handleError();
            }
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