import React from 'react';
import './Dashboard.css';

export const Dashboard = ({supabase, session}) => {
    return (
        <div className='dashboard'>
            <h1>Welcome {session.user.email}</h1>
            <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
    );
}

