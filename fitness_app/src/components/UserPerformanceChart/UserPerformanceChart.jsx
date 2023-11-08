import React, { useEffect } from "react";
import { Chart } from "chart.js";
import styles from "./UserPerformanceChart.module.css";

window.onload = function() {
    var color = getComputedStyle(document.body);
    Chart.defaults.backgroundColor = '#9BD0F5';

    var chrt = document.getElementById("chartId").getContext("2d");
    var chartId = new Chart(chrt, {
		type : 'line',
		data : {
			labels : [ 1500, 1600, 1700, 1750, 1800, 1850,
					1900, 1950, 1999, 2050 ],
			datasets : [
					{
						data : [ 186, 205, 1321, 1516, 2107,
								2191, 3133, 3221, 4783, 5478 ],
						label : "America",
						borderColor : "#3cba9f",
						fill : false,
					}],
		},
		options : {
			title : {
				display : true,
				text : 'Chart JS Line Chart Example'
			}
		},
	});
 }

const UserPerformanceChart = ({ supabase, session }) => {

    return (
         <div className={styles.userPerformanceChartContainer}>   
            <canvas id="chartId" aria-label="chart" heigth="350" width="580"></canvas>
        </div>
    );
};

export default UserPerformanceChart;