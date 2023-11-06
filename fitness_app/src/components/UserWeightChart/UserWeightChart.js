import React, { useEffect } from "react";
import useFetchWeightData from "../../hooks/useFetchWeightData";
import {LineChart} from '@mui/x-charts';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Chart } from "chart.js";

const UserWeightChart = ({ supabase, session }) => {
    const { weights, dates } = useFetchWeightData({ supabase, session });
    
    var style = getComputedStyle(document.body)
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
          label: "Monthly Sales",
          data: [10, 15, 7, 12, 20],
          borderColor: "blue",
          borderWidth: 2,
          fill: false,
      }]
  };
  
  // // Chart configuration
  // const config = {
  //     type: 'line',
  //     data: data,
  //     options: {
  //         scales: {
  //             x: {
  //                 display: true,
  //                 title: {
  //                     display: true,
  //                     text: 'Month'
  //                 }
  //             },
  //             y: {
  //                 display: true,
  //                 title: {
  //                     display: true,
  //                     text: 'Sales'
  //                 }
  //             }
  //         }
  //     },
  // };
  
  // // Create the line chart
  // useEffect(() => {
  //   // Update the document title using the browser API
   
  // });
  // const ctx = document.getElementById('myLineChart');
  // const myChart = new Chart(ctx, config);

    return (
        <div>
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: style.getPropertyValue("--white-color"), height: '40vh',width: '135vh' , borderRadius: '3px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' }}>
                    <LineChart
                    
                  sx={{
                    ".MuiChartsAxis-left .MuiChartsAxis-tickLabel, .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                      fontFamily: "Roboto",
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    },
                    ".MuiChartsAxis-bottom .MuiChartsAxis-line, .MuiChartsAxis-left .MuiChartsAxis-line": {
                      stroke: '#fff',
                      strokeWidth: 7,
                    },
                  }}
                  
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10, 2, 5, 6, 7, 3, 6 ,7] }]}
                    series={[
                        {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                        label: 'Weight',
                        },
                    ]}
                    disableAxisListener
                    width={500}
                    height={300}
                    />
                    
                </Box>
            </Container>
            </React.Fragment>
        </div>
    );
};

export default UserWeightChart;