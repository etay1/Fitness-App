import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import styles from "./UserAnotherChart.module.css";
import { useSession } from "../../supabase/sessionContext";
import { supabase } from "../../supabase/client";

const UserAnotherChart = () => {
  const { session } = useSession();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
