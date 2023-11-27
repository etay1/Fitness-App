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
            {weights.length > 0 && (
                <div>
                    <h3>Weight: </h3>
                    <p> {weights[0]}</p>
                    <h3>Date: </h3>
                    <p> {dates[0]}</p>
                </div>
            )}
        </div>
    );
};

export default UserWeightDisplay;
