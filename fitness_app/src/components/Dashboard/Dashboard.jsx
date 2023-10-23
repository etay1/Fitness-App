import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

export const Dashboard = ({ supabase, session }) => {
  const [weights, setWeights] = useState([]);
  const [dates, setDates] = useState([]);
  const [chartData, setChartData] = useState({});

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
          setWeights(weightValues);
          const dateValues = data.map((item) => item.date);
          setDates(dateValues);

        }
    }
    fetchWeightData();
  }, [supabase, session.user.id]);

  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  useEffect(() => {
    const data = {
      labels: dates,
      datasets: [
        {
          label: "Weight",
          data: weights,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    setChartData(data);
  }, [weights]);

  useEffect(() => {
    const chart = new Chart("myChart", {
      type: "line",
      data: chartData,
    });
    return () => chart.destroy();
  }, [chartData]);

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
    </div>
  );
};
