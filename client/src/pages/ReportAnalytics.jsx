import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

// Components
import { yearData_80, yearData_8085, yearData_8590, yearData_9095, yearData_9500, yearData_0005, yearData_0510, yearData_1015 } from '../constants/MovieInfo';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReportAnalytics = () => {
  const chartYears = {
    labels: ['<1980', '1980-1985', '1985-1990', '1990-1995', '1995-2000', '2000-2005', '2005-2010', '>2010'],
    datasets: [
      {
        label: 'year',
        data: [yearData_80, yearData_8085, yearData_8590, yearData_9095, yearData_9500, yearData_0005, yearData_0510, yearData_1015],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(14, 196, 117, 0.5)',
          'rgba(184, 180, 182, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(14, 196, 117, 1)',
          'rgba(184, 180, 182, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // ----- Render -----

  return (
    <div className='main'>
      <h3>Report and Analytics</h3>
      <p className="first-line paragraph">🚧</p>
      <div>
        <Doughnut className='donut-chart' data={chartYears} />
        {/* <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />

        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        /> */}
      </div>
    </div>
  )
};

export default ReportAnalytics;