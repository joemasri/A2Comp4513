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
            <div className="flex-center items-center m-20">
                <h1 className='text-2xl font-bold mb-4'>Login</h1>
                <form>
                    <div className="mb-4">
                        <label className=" block m-1 text-black text-sm font-bold" htmlFor="username">Username</label>
                        <input className="shadow border rounded py-2 px-3 text-gray-700 m-3" type="text" id="username" name="username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-black text-sm font-bold" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3" type="password" id="password" name="password" />
                    </div>
                    <button className="py-2 px-4 text-white bg-gray-400 rounded" type="button" onClick={handleLogin}>Login</button>
                    <button className="py-2 px-4 ml-4 text-white bg-gray-400 rounded" type="button"onClick={handleLogin}>/Register</button>
                </form>
            </div>
        </div>
    )
}

export default LoginView;   