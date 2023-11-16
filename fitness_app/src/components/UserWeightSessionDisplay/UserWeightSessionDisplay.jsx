import React, { useState, useEffect } from 'react';
import UseFetchMostRecentWeightSession from '../../hooks/useFetchMostRecentWeightSession';
import styles from "../Dashboard/Dashboard.module.css";

const UserWeightSessionDisplay = ({ supabase, session }) => {
    const [mostRecentWeightSession, setMostRecentWeightSession] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mostRecentWeightSessionData = await UseFetchMostRecentWeightSession({
                    supabase,
                    userId: session.user.id,
                });

                if (mostRecentWeightSessionData) {
                    setMostRecentWeightSession(mostRecentWeightSessionData);
                }
            } catch (error) {
                console.error('Error fetching most recent weight session', error);
            }
        };

        fetchData();



    }, [supabase, session.user.id]);

    return (
        <div className={styles.widgetBox}>
            <div className={styles.smallWidget}>
                <h2>Most Recent Weight Session</h2>
                {mostRecentWeightSession ? (
                    <div>
                        <p>Name: {mostRecentWeightSession.name}</p>
                        <p>Description: {mostRecentWeightSession.description}</p>
                        <p>Calories Per Rep: {mostRecentWeightSession.calories_per_rep}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
};

export default UserWeightSessionDisplay;