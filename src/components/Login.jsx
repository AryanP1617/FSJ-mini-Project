import React from "react";
import './Login.css'

function Login (){

    const handleSubmit = () => {
        
    }

    return (
        <>
            <div className="w-screen h-screen absolute flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-100 h-100 text-center text-4xl bg-[#EBFFEB] p-5 m-5 rounded-2xl">
                    <h1 className="text-3xl">Sign in with Email</h1>
                    <div className="text-sm p-2 mb-5">Your all-in-one hub to track, manage, and excel in your academic journey.</div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-xl bg-[#C7F3E5] rounded-lg p-2 mb-5">
                            <input className="outline-none"
                            type="email"
                            id="email"
                            // value={email}
                            required
                            placeholder="Email"
                            />
                        </div>
                        <div className="text-xl bg-[#C7F3E5] rounded-lg p-2 mb-10">
                            <input className="outline-none"
                            type="password"
                            id="password"
                            // value={password}
                            required
                            placeholder="Password"
                            />
                        </div>
                    </form>
                    <div className="flex justify-center bg-black w-50 h-10 rounded-xl">
                        <button className="text-white text-xl text-center">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login