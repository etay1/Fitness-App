import React, { useState, useEffect } from "react";
import UseFetchMostRecentWeightSession from "../../hooks/useFetchMostRecentWeightSession";
import styles from "../Dashboard/Dashboard.module.css";

const UserWeightSessionDisplay = ({ supabase, session }) => {
  const [mostRecentWeightSession, setMostRecentWeightSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mostRecentWeightSessionData =
          await UseFetchMostRecentWeightSession({
            supabase,
            userId: session.user.id,
          });

        if (mostRecentWeightSessionData) {
          setMostRecentWeightSession(mostRecentWeightSessionData);
        }
      } catch (error) {
        console.error("Error fetching most recent weight session", error);
      }
    };

    fetchData();
  }, [supabase, session.user.id]);

  return (
    <div className={styles.widgetBox}>
      {mostRecentWeightSession ? (
        <div className={styles.smallWidget}>
          <h1>Recent Weight Session</h1>
          <div>
          Name: {mostRecentWeightSession.name}
          </div>
          <div>
          Description: {mostRecentWeightSession.description}
          </div>
          <div>
          Calories Per Rep: {mostRecentWeightSession.calories_per_rep}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserWeightSessionDisplay;
