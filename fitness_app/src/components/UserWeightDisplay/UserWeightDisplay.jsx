import React, { useState, useEffect } from "react";
import UseFetchMostRecentWeight from "../../hooks/UseFetchMostRecentWeight";
import styles from "../Dashboard/Dashboard.module.css";

const UserWeightDisplay = ({ supabase, session }) => {
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
    }, [supabase, session.user.id]);

    return (
        <div className={styles.widgetBox}>
            {weights.length > 0 && (
                <div className={styles.smallWidget}>
                    <h1>Most Recent Weight</h1>
                    <h3 className={styles.smallWidget}>Weight: </h3>
                    <p className={styles.smallWidget}> {weights[0]}</p>
                    <h3>Date: </h3>
                    <p className={styles.smallWidget}> {dates[0]}</p>
                </div>
            )}
        </div>
    );
};

export default UserWeightDisplay;


// const useFetchWeightData = async ({ supabase, session }) => {
//     const [weights, setWeights] = useState([]);
//     const [dates, setDates] = useState([]);

//     // Use useEffect to fetch data when the component mounts
//     useEffect(() => {
//         const fetchData = async () => {
//             const mostRecentWeightData = await getMostRecentWeight({
//                 supabase,
//                 userId: session.user.id,
//             });