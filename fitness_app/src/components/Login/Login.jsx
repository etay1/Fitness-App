import React from 'react';
import './Login.css';

export const Login = () => {
    return (
        <div className='main'>
            <div className="title">
                <h1>Fitness Pal</h1>
            </div>
            <div className="container_login">
                <input type="text" id="username" placeholder="Username" className="input-field" />
                <input type="password" id="password" placeholder="Password" className="input-field" />
                <button type="submit" id="login_btn" className="login-btn">Login</button>
            </div>
        </div>
    );
}
