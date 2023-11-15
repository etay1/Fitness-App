import React, { useState, useEffect } from 'react';
import UseFetchMostRecentCardioSession from '../../hooks/useFetchMostRecentCardioSession';

const UserCardioSessionDisplay = ({ supabase, session }) => {
    const [mostRecentCardioSession, setMostRecentCardioSession] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mostRecentCardioSessionData = await UseFetchMostRecentCardioSession({
                    supabase,
                    userId: session.user.id,
                });

                if (mostRecentCardioSessionData) {
                    setMostRecentCardioSession(mostRecentCardioSessionData);
                }
            } catch (error) {
                console.error('Error fetching most recent cardio session:', error);
                // Handle error appropriately
            }
        };

        fetchData();
    }, [supabase, session.user.id]);

    // Render mostRecentCardioSession data here

    return (
        <div>
            <div>
                <h2>Most Recent Cardio Session</h2>
                {mostRecentCardioSession ? (
                    <div>
                    <p>Name: {mostRecentCardioSession.name}</p>
                    <p>Description: {mostRecentCardioSession.description}</p>
                    <p>Calories Per Unit Duration: {mostRecentCardioSession.calories_per_unit_duration}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default UserCardioSessionDisplay;
