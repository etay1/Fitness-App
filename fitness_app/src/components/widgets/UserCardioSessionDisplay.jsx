import React, { useState, useEffect } from 'react';
import UseFetchMostRecentCardioSession from '../../hooks/DashboardWidgetHooks/UseFetchMostRecentCardioSession';
import { useSession } from "../../supabase/sessionContext";
import { supabase } from '../../supabase/client';
import styles from './widgets.module.css';

const UserCardioSessionDisplay = () => {
    const { session } = useSession();
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
    }, []);

    // Render mostRecentCardioSession data here

return (
    <div className={styles.widgetContainer}>  
        {mostRecentCardioSession ? (
            <div>
                <h4>Session Name:</h4>
                <p> {mostRecentCardioSession.name}</p>
                <h4>Calories/Duration:</h4>
                <p> {mostRecentCardioSession.calories_per_unit_duration}</p>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserCardioSessionDisplay;
