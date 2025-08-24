import React from "react";
import './Pass.css'
import { useNavigate } from "react-router-dom";

function Login (){
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        console.log("handleSubmit called!")
        e.preventDefault()

        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()

        if(!email){
            alert("Please enter Email!")
            return
        }
        if(!password){
            alert("Please enter your Password!")
            return
        }
        
        navigate('/home')
    }

    return (
        <>
            <div className="w-screen h-screen absolute flex justify-center items-center">
                <div className="card w-100 h-100 text-center text-4xl p-5 m-5 rounded-2xl">
                    <h1 className="text-3xl">Sign in with Email</h1>
                    <div className="text-sm p-2 mb-5">Your all-in-one hub to track, manage, and excel in your academic journey.</div>
                    <form>
                        <div className="text-xl bg-[#C7F3E5] rounded-lg p-2 mb-5">
                            <input className="outline-none"
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Email"
                            />
                        </div>
                        <div className="text-xl bg-[#C7F3E5] rounded-lg p-2 mb-10">
                            <input className="outline-none"
                            type="password"
                            name="password"
                            id="password"
                            minLength={6}
                            required
                            placeholder="Password"
                            />
                        </div>
                        <div className="login-button w-50 h-10 rounded-xl cursor-pointer">
                            <button className="text-white text-xl text-center cursor-pointer"
                            type="submit"
                            onClick={handleSubmit}
                            >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login