import React, { useEffect } from "react";
import useFetchWeightData from "../../hooks/useFetchWeightData";
import {LineChart} from '@mui/x-charts';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chart from 'chart.js/auto';

const UserCaloriesChart = ({ supabase, session }) => {
    const { weights, dates } = useFetchWeightData({ supabase, session });
    var style = getComputedStyle(document.body)
   
    return (
        <div>
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: style.getPropertyValue("--white-color"), height: '40vh', borderRadius: '3px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' }}>
                   
                </Box>
            </Container>
            </React.Fragment>
        </div>
    );
};

export default UserCaloriesChart;