import React, { useState, useEffect } from 'react';
import UseFetchMostRecentCardioSession from '../../hooks/useFetchMostRecentCardioSession';
import styles from "../Dashboard/Dashboard.module.css";

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
    <div className={styles.widgetBox}>  
        {mostRecentCardioSession ? (
            <div className={styles.smallWidget}>
                <h4 className={styles.smallWidget}>Name:</h4>
                <p className={styles.smallWidget}> {mostRecentCardioSession.name}</p>
                <h4 className={styles.smallWidget}>Description:</h4>
                <p className={styles.smallWidget}> {mostRecentCardioSession.description}</p>
                <h4 className={styles.smallWidget}>Calories Per Unit Duration:</h4>
                <p className={styles.smallWidget}>  {mostRecentCardioSession.calories_per_unit_duration}</p>
            </div>
            ) : (
                <p className={styles.smallWidget}>Loading...</p>
            )}
        </div>
    );
};

export default UserCardioSessionDisplay;
