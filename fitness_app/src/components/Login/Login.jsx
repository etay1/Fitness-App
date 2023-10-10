import React from 'react';
import './Login.css';
import photo from '../../images/photo.jpg'

export const Login = () => {
    return (
        <div className="page">
            {/*  */}
            <div className='container'>

                {/* container item 1 */}
                <div className='box left-box'>

                        {/* left-box item 1 */}
                        <div className="form">
                            <input type="text" id="username" placeholder="Username" className="input-field" />
                            <input type="password" id="password" placeholder="Password" className="input-field" />
                            <button type="submit" id="login_btn" className="login-btn">Login</button>                
                        </div>

                </div>

                {/* container item 2 */}
                <div className='box right-box'>

                    
                    {/* right-box item 1 */}
                    <img src={photo} alt="gym_photo" className='img'/>

                </div>

            </div>

        </div>
    );
}
