import React, { useState, useEffect } from 'react';
import UseFetchMostRecentWeightSession from '../../hooks/DashboardWidgetHooks/UseFetchMostRecentWeightSession';
import { useSession } from '../../supabase/sessionContext';
import { supabase } from '../../supabase/client';
import styles from './widgets.module.css';

const UserWeightSessionDisplay = () => {
    const { session } = useSession();
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



    }, []);

    return (

        <div className={styles.widgetContainer}>
            <div className={styles.textContainer}>
            {mostRecentWeightSession ? (
                <div>
                    <h3>Last Weight Workout:</h3>
                    <p>{mostRecentWeightSession.name}</p>
                    <h3>Calories/Rep:</h3>
                    <p>{mostRecentWeightSession.calories_per_rep}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            </div>
            <div className={styles.imageContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                </svg>
            </div>
        </div>
    )
};

export default UserWeightSessionDisplay;