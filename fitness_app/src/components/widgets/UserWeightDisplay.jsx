import React, { useState, useEffect } from "react";
import UseFetchMostRecentWeight from "../../hooks/DashboardWidgetHooks/UseFetchMostRecentWeight";
import { useSession } from "../../supabase/sessionContext";
import { supabase } from "../../supabase/client";
import styles from "./widgets.module.css";

const UserWeightDisplay = () => {
    const { session } = useSession();
    const [weights, setWeights] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mostRecentWeightData = await UseFetchMostRecentWeight({
                    supabase,
                    userId: session.user.id,
                });

                if (mostRecentWeightData) {
                    const { weight, date } = mostRecentWeightData;
                    setWeights([weight]);
                    setDates([date]);
                }
            } catch (error) {
                console.error("Error fetching weight data:", error);
                // Handle error appropriately
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.widgetContainer}>  
            {/* Render the fetched weight data */}
            <div className={styles.textContainer}>
            {weights.length > 0 && (
                <div>
                    <h3>Current Weight: </h3>
                    <p> {weights[0]}</p>
                    <h3>Date Noted: </h3>
                    <p> {dates[0]}</p>
                </div>
            )}
            </div>
            <div className={styles.imageContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>
            </div>
        </div>
    );
};

export default UserWeightDisplay;
