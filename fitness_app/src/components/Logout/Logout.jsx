import React from 'react';
import './Logout.css';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';

export const Logout = () => {
    return (
        <div className='logout'>
        </div>
    );
}
