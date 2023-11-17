import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import styles from "./UserAnotherChart.module.css";

const UserAnotherChart = ({ supabase, session }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const color = getComputedStyle(document.body);
    Chart.defaults.backgroundColor = "#9BD0F5";

    const chartElement = document.getElementById("anotherChartID");

    // Check if the chart already exists and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(chartElement, {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050, 2100, 2150, 2200, 2250, 2300],
        datasets: [
          {
            data: [186, 205, 1321, 1516, 2107, 2191, 3133, 3221, 4783, 5478, 6000, 7000, 8000, 9000, 10000],
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
    <div className={styles.userAnotherChartContainer}>
      <canvas className="another-chart" id="anotherChartID" aria-label="chart" height="350" width="1000"></canvas>
    </div>
  );
};

export default UserAnotherChart;
