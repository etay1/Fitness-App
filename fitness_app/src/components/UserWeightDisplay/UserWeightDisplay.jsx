import React, { useState, useEffect } from "react";
import useFetchWeightData from "../../hooks/useFetchWeightData";
import styles from "./UserWeightDisplay.module.css";
import UseFetchMostRecentWeight from "../../hooks/UseFetchMostRecentWeight";


const UserWeightDisplay = async ({ supabase, session }) => {
    const [weights, setWeights] = useState([]);
    const [dates, setDates] = useState([]);

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const mostRecentWeightData = await UseFetchMostRecentWeight({
                supabase,
                userId: session.user.id,
            });

            if (mostRecentWeightData) {
                const { weight, date } = mostRecentWeightData;
                setWeights([weight]);
                setDates([date]);
            }
        };

        fetchData();
    }, [supabase, session.user.id]);
    return (
        <div className={styles.userWeightDisplay}>
            
        </div>
    )
}

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