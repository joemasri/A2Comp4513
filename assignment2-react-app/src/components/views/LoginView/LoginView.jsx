import React from 'react';
import Header from '../../common/Header';

const LoginView = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default LoginView;   