import React from 'react';
import './Login.css';
import photo from '../../images/photo.jpg'
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_ANON_KEY
  )
  

export const Login = () => {
    return (
        <div className="login">

            <div className='container'>

                {/* container item 1 */}
                <div className='box left-box'>

                        {/* left-box item 1 */}
                        <div className="form">
                        <Auth
                            supabaseClient={supabase}
                            providers={['google']}
                            appearance={{ theme: ThemeSupa,
                                style: {
                                    button: { background: '#047aed', color: 'white' },
                                    anchor: { color: '#047aed' },
                                    },
                            }}
                            
                            />
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
