import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import styles from "./charts.module.css";
import { useSession } from "../../supabase/sessionContext";
import { supabase } from "../../supabase/client";

const UserAnotherChart = () => {
  const { session } = useSession();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // The session -> Cardio Session | Weight Session -> Cardio Exercise | Weight Exercise

        // Calories Burned:
        // Get the Session Date (All same date session calories would be coupled together)
        // Get all the cardio and weight sessions that have the matching session ID
        // Get all the cardio and weight exercise IDs that have session ID
        // Multiply the time within the start time and end time of a cardio session by the calories per unit duration
        // Multiply the time within the start time and end time of a weight session by the reps per set * set * calories per set
        // Get the weight and cardio calories burned for the day
        // Make an array for the days and calories burned for the day
        // display
        
        const { data: sessionDate, error1 } = await supabase
          .from('session')
          .select('date')
        
        const{data: cardioExercise, error2} = await supabase
          .from('cardio_session')
          .select('cardio_exercise_id')
          .eq("user_id", session.user.id);
          console.log(cardioExercise);


        const { data: userWeight, error } = await supabase
          .from("user_weight")
          .select("weight, date")
          .eq("user_id", session.user.id);

        if (error) {
          throw new Error("Error fetching data from Supabase");
        }

        const chartElement = document.getElementById("anotherChartID");

        // Check if the chart already exists and destroy it
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        createChart(chartElement, userWeight);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, []);

  const createChart = (element, data) => {
    const weights = data.map((dataPoint) => dataPoint.weight);
    const dates = data.map((dataPoint) => dataPoint.date);

    chartRef.current = new Chart(element, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: weights,
            label: "Weight",
            backgroundColor: "#9BD0F5",
            borderColor: "#3cba9f",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "User Another Chart",
        },
      },
    });
  };

  return (
    <div className={styles.userAnotherChartContainer}>
      <canvas
        className="another-chart"
        id="anotherChartID"
        aria-label="chart"
        height="500"
        width="1000"
      ></canvas>
    </div>
  );
};

export default UserAnotherChart;
