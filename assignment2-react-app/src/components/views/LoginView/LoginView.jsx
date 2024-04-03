import React, { useState } from 'react';
import Header from '../../common/Header';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {

    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className='text-2xl font-bold mb-4'>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="button" onClick={handleLogin}>Login</button>
                    <button type="button"onClick={handleLogin}>/Register</button>
                </form>
            </div>
        </div>
    )
}

export default LoginView;   