import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import styles from "./UserPerformanceChart.module.css";

const UserPerformanceChart = ({ supabase, session }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const color = getComputedStyle(document.body);
    Chart.defaults.backgroundColor = "#9BD0F5";

    const chartElement = document.getElementById("chartId");

    // Check if the chart already exists and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(chartElement, {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [186, 205, 1321, 1516, 2107, 2191, 3133, 3221, 4783, 5478],
            label: "America",
            borderColor: "#3cba9f",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Chart JS Line Chart Example",
        },
      },
    });
  }, []);

  return (
    <div className={styles.userPerformanceChartContainer}>
      <canvas id="chartId" aria-label="chart" height="350" width="1000"></canvas>
    </div>
  );
};

export default UserPerformanceChart;
