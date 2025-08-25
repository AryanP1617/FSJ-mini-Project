import React from "react";
import "./Landing.css"
import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate = useNavigate()

    return (
        <>
        <div className="hero min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
                <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600">
                        StudySync
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => navigate('/login')}
                            className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => navigate('/signup')}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>
                </nav>


                <div className="flex-1 flex items-center justify-center">
                    <div className="max-w-5xl text-center grid grid-cols-2 my-5">
                        <div className="my-15 mr-15">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Your Academic Journey,
                            <span className="text-indigo-600"> Simplified</span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Track attendance, manage assignments, monitor grades, and stay on top of your academic life with our all-in-one student dashboard.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => navigate('/signup')}
                                className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Get Started
                            </button>
                            <button 
                                onClick={() => navigate('/demo')}
                                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 text-lg font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
                            >
                                View Demo
                            </button>
                        </div>
                        </div>

                        <div>
                            <img className="rounded-3xl"
                            src="https://i.pinimg.com/736x/a4/c6/1b/a4c61bb2fcd735f198bd67144c0c2864.jpg" alt="" />
                        </div>

                    </div>
                </div>



                <div className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Everything you need to excel academically
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Attendance Tracking</h3>
                                <p className="text-gray-600">Never miss a class. Track your attendance across all subjects and get alerts for low attendance.</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Assignment Manager</h3>
                                <p className="text-gray-600">Keep track of all your assignments, deadlines, and submissions in one organized place.</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Grade Monitoring</h3>
                                <p className="text-gray-600">Monitor your academic progress with detailed grade tracking and performance analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-indigo-600 py-16">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to transform your academic experience?
                        </h2>
                        <p className="text-indigo-100 text-lg mb-8">
                            Join thousands of students who are already using StudySync to excel in their studies.
                        </p>
                        <button 
                            onClick={() => navigate('/signup')}
                            className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Start Your Journey Today
                        </button>
                    </div>
                </div>



                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <div className="text-xl font-bold mb-4">StudySync</div>
                        <p className="text-gray-400">© 2025 StudySync. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Landing