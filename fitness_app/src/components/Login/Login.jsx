import React, { useState, useEffect } from 'react';
import './Login.css';
import photo2 from '../../images/photo2.webp';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_ANON_KEY
  )
  

export const Login = ({supabase}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = photo2;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, []); 
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
                 
                    {imageLoaded ? (
                    
                    <img src={photo2} alt="gym_photo" className='img-login' preload ="lazy" />
                    ) : (
                    <div> Loading Image ...</div>
                    )}

                   

                </div>

            </div>

        </div>
    );
    
}
