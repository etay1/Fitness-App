import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

export const Dashboard = ({supabase, session}) => {
    const [chartData, setChartData] = useState({});

    const [weights, setWeights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch all weights for the user
            const { data: weights, error } = await supabase
                .from('user_weight')
                .select('*')
                .eq('user_id', session.user.id);

            if (error) {
                console.error(error);
            } else {
                setWeights(weights);
            }

            const data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
            };
            setChartData(data);
        };
        fetchData();
        }, []);

        useEffect(() => {
            const chart = new Chart('myChart', {
                type: 'line',
                data: chartData
            });
            return () => chart.destroy();
        }, [chartData]);

        return (
            <div className='dashboard'>
                <h1>Welcome {session.user.email}</h1>
                <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
                <Link to="/add-exercise">Add Exercise</Link>
                <Link to="/add-sub-session">Add Sub Session</Link>
                <Link to="/add-user-weight">Add User Weight</Link>
                <div className="weight_chart">
                    <canvas id="myChart" width="300" height="300"></canvas>
                </div>
            </div>
        );
    }

