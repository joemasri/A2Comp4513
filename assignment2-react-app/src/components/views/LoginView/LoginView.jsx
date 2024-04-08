import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {

    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <div>
            <div className="relative min-h-screen w-full flex flex-col justify-between bg-cover bg-center" style={{backgroundImage: "url('https://wallpaperset.com/w/full/f/8/7/23730.jpg')"}}>
                
                {/* Overlay */}
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40"></div>

                {/* Title */}
                <h1 className="z-10 text-4xl font-bold text-white text-center mt-8">F1 DASHBOARD</h1>

                    {/* Login Form */}
                    <div className="z-10 items-center justify-center p-5 m-5 bg-black bg-opacity-50 rounded-lg">
                        <h1 className="text-2xl font-bold mb-5 text-white underline">LOGIN/REGISTER</h1>
                        <form className="text-center">
                            <div className="mb-4">
                                <label className="block m-1 text-black text-sm font-bold text-white" htmlFor="username">Username</label>
                                <input className="shadow border rounded py-2 px-3 text-gray-700 m-3 w-70" type="text" id="username" name="username" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-black text-sm font-bold text-white" htmlFor="password">Password</label>
                                <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3 w-70" type="password" id="password" name="password" />
                            </div>
                            <button className="w-30 py-2 px-6 text-white bg-gray-400 rounded font-bold" type="button" onClick={handleLogin}>Login</button>
                            <button className="w-15 py-2 px-6 ml-4 text-white bg-red-400 rounded font-bold" type="button"onClick={handleLogin}>Register</button>
                        </form>
                    </div>

                    {/* Credits */}
                    <p className="z-10 text-white text-center mb-8">
                    Credits: <a href="https://wallpaperset.com/formula-1-wallpapers" className="underline">wallpaperset.com</a>
                    </p>
            </div>
        </div>
    )
}

export default LoginView;   