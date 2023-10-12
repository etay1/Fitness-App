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
  

export const Login = ({supabase}) => {
    return (
        <div className="login">

            <div className='container-login'>

                {/* container item 1 */}
                <div className='box-login left-box-login'>

                        {/* left-box item 1 */}
                        <div className="form-login">
                        <Auth
                            supabaseClient={supabase}
                            providers={[]}
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
                <div className='box-login right-box-login'>

                    
                    {/* right-box item 1 */}
                    <img src={photo} alt="gym_photo" className='img-login'/>

                </div>

            </div>

        </div>
    );
}
