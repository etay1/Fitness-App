import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { useSession } from "../../supabase/sessionContext";
import { supabase } from "../../supabase/client";
import UseWeightPlusCardioCalories from "../../hooks/UseWeightPlusCardioCalories";

const UserCaloriesTotalChart = () => {
  const { session } = useSession();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UseWeightPlusCardioCalories({
          supabase,
          session
        });

        if (result.error) {
          throw new Error("Error fetching data from UseWeightPlusCardioCalories");
        }

        const chartElement = document.getElementById("caloriesChartID");

        if (chartRef.current) {
          chartRef.current.destroy();
        }

        createChart(chartElement, result.data);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, );

  const createChart = (element, data) => {
    const calories = [data.totalCaloriesBurntWeight, data.totalCaloriesBurntCardio];

    chartRef.current = new Chart(element, {
      type: "line",
      data: {
        datasets: [
          {
            data: calories,
            label: "Calories",
            backgroundColor: "#FFD700", // Adjust the color as needed
            borderColor: "#FF4500", // Adjust the border color as needed
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Total Calories Burnt",
        },
      },
    });
  };

  return (
    <div>
      <canvas
        className="calories-chart"
        id="caloriesChartID"
        aria-label="chart"
      ></canvas>
    </div>
  );
};

export default UserCaloriesTotalChart;