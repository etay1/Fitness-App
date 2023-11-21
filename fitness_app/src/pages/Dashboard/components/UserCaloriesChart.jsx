import React, { useEffect } from "react";
import useFetchWeightData from "../../../hooks/useFetchWeightData";
import { LineChart } from "@mui/x-charts";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chart from "chart.js/auto";
import styles from "../styles/UserCaloriesChart.module.css";
import { useSession } from "../../../supabase/sessionContext";

const UserCaloriesChart = () => {
	const { weights, dates } = useFetchWeightData();
	var style = getComputedStyle(document.body);

	const { session } = useSession();

	return (
		<div className={styles.userCaloriesChart}>
			<LineChart
				xAxis={[{ data: [1, 2, 3, 5, 8, 10, 2, 5, 6, 7, 3, 6, 7] }]}
				series={[
					{
						data: [2, 5.5, 2, 8.5, 1.5, 5],
						area: true,
						label: "Calories",
						color: style.getPropertyValue("--dark-blue-color"),
					},
				]}
				disableAxisListener
				width={400}
				height={300}
			/>
		</div>
	);
};

export default UserCaloriesChart;
