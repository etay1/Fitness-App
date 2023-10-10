import React from 'react';
import './Login.css';
import photo from '../../images/photo.jpg';

export const Login = () => {
    return (
        <div className='container'>
            <div className='box left-box'>
                    <div className="form">
                        <input type="text" id="username" placeholder="Username" className="input-field" />
                        <input type="password" id="password" placeholder="Password" className="input-field" />
                        <button type="submit" id="login_btn" className="login-btn">Login</button>                
                    </div>
            </div>
            <div className='box right-box'>
            right box
            </div>
        </div>
    );
}
