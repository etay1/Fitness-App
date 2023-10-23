import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

export const Dashboard = ({ supabase, session }) => {
  const [weights, setWeights] = useState([]);
  const [dates, setDates] = useState([]);
  const [chartData, setChartData] = useState({});
  const [weightMap, setWeightMap] = useState({});
  const [selectedTimeRange, setSelectedTimeRange] = useState("weekly"); // Default to "weekly"

  useEffect(() => {
    async function fetchWeightData() {
      // Fetch all weights and dates for the user
      const { data, error } = await supabase
        .from("user_weight")
        .select("weight, date")
        .eq("user_id", session.user.id);

      if (error) {
        console.error(error);
      } else {
        const weightValues = data.map((item) => item.weight);
        let dateValues = data.map((item) => item.date);
        dateValues = dateValues.sort((a, b) => new Date(b) - new Date(a));
        const weightMap = {};
        dateValues.forEach((date, index) => {
          weightMap[date] = weightValues[index];
        });

        setWeights(weightValues);
        setDates(dateValues);
        setWeightMap(weightMap);
      }
    }
    fetchWeightData();
  }, [supabase, session.user.id]);

  const weightMapKeys = Object.keys(weightMap);
  const weightMapValues = Object.values(weightMap);

  useEffect(() => {
    const data = {
      labels: weightMapKeys,
      datasets: [
        {
          label: "Weight",
          data: weightMapValues,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    setChartData(data);
  }, [weights]);

  useEffect(() => {
    if (selectedTimeRange === "yearly") {
      // Render the chart only when "Yearly" is selected
      const chart = new Chart("myChart", {
        type: "line",
        data: chartData,
      });
      return () => chart.destroy();
    }
  }, [selectedTimeRange, chartData]);

  return (
    <div className="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <Link to="/add-exercise">Add Exercise</Link>
      <Link to="/add-sub-session">Add Sub Session</Link>
      <Link to="/add-user-weight">Add User Weight</Link>
      <div className="weight_chart">
        <canvas id="myChart" width={100} height={50}></canvas>
      </div>
      <div className="weight_range_buttons">
        <label className="radio-button">
          <input
            type="radio"
            name="time-range"
            value="weekly"
            checked={selectedTimeRange === "weekly"}
            onChange={() => setSelectedTimeRange("weekly")}
          />
          Weekly
        </label>
        <label className="radio-button">
          <input
            type="radio"
            name="time-range"
            value="monthly"
            checked={selectedTimeRange === "monthly"}
            onChange={() => setSelectedTimeRange("monthly")}
          />
          Monthly
        </label>
        <label className="radio-button">
          <input
            type="radio"
            name="time-range"
            value="yearly"
            checked={selectedTimeRange === "yearly"}
            onChange={() => setSelectedTimeRange("yearly")}
          />
          Yearly
        </label>
      </div>
    </div>
  );
};
