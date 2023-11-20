import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "../Dashboard/Dashboard.module.css";
import useFetchWeightData from "../../hooks/useFetchWeightData";

const UserWeightChart = ({ supabase, session }) => {
  const { weights, dates } = useFetchWeightData({ supabase, session });
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !weights.length || !dates.length) return;

    // Destroy the existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const chartElement = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(chartElement, {
      type: "bar",
      data: {
        labels: dates.map((date) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            label: "Weights",
            data: weights,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "x",
        plugins: {
          title: {
            display: true,
            text: "Recorded Weights Histogram",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [weights, dates]);

  return (
    <div className={styles.largeWidgetBox}>
      <canvas
        ref={chartRef}
        id="chartId"
        aria-label="chart"
        height="300"
        width="400"
      ></canvas>
    </div>
  );
};

export default UserWeightChart;
