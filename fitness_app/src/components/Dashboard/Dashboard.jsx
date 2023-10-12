import React from 'react';
import './Dashboard.css';

export const Dashboard = ({supabase, session}) => {
    console.log(session)
    console.log(session.user.email)
    console.log(session.user.id)
    
    const userId = session.user.id;
    console.log(userId)

    return (
        <div className='dashboard'>
            <h1>Welcome {session.user.email}</h1>

            <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
    );
}

