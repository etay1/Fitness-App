import React, { useState, useEffect } from 'react';
import UseFetchMostRecentWeightSession from '../../hooks/UseFetchMostRecentWeightSession';
import { useSession } from '../../supabase/sessionContext';
import { supabase } from '../../supabase/client';

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
        <div>
            <div>
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