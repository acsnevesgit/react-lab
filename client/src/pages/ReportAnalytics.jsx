import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

// Components
import {
  yearData_80,
  yearData_8085,
  yearData_8590,
  yearData_9095,
  yearData_9500,
  yearData_0005,
  yearData_0510,
  yearData_10,
} from '../constants/MovieInfo';
import {
  DramaG,
  HorrorG,
  ThrillerG,
  CrimeG,
  MusicalG,
  RomanceG,
  SciFiG,
  DocumentaryG,
  ComedyG,
  AdventureG,
  ActionG,
  WarG,
  FantasyG,
  MysteryG,
  FilmNoirG,
  WesternG,
  ChildrenG,
  OtherG,
} from '../constants/MovieInfo';
import {
  FranceC,
  ItalyC,
  SpainC,
  GermanyC,
  SwedenC,
  DenmarkC,
  NorwayC,
  PortugalC,
  ChinaC,
  JapanC,
  SouthKoreaC,
  TurkeyC,
  ArgentinaC,
  PolandC,
  IndiaC,
  NetherlandsC,
  RussiaC,
  BrazilC,
  CanadaC,
  MexicoC,
} from '../constants/MovieInfo';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip
);
ChartJS.defaults.font.size = 18;
ChartJS.defaults.color = '#8f8f8f';

const chartConfig = {
  backgroundColor: [
    'rgba(111, 82, 59, 0.5)',
    'rgba(183, 105, 53, 0.5)',
    'rgba(179, 137, 93, 0.5)',
    'rgba(186, 12, 12, 0.5)',
    'rgba(255, 0, 0, 0.5)',
    'rgba(230, 96, 99, 0.5)',
    'rgba(255, 135, 0, 0.5)',
    'rgba(255, 211, 0, 0.5)',
    'rgba(222, 255, 10, 0.5)',
    'rgba(161, 255, 10, 0.5)',
    'rgba(39, 163, 0, 0.5)',
    'rgba(10, 255, 153, 0.5)',
    'rgba(10, 239, 255, 0.5)',
    'rgba(20, 125, 245, 0.5)',
    'rgba(88, 10, 255, 0.5)',
    'rgba(190, 10, 255, 0.5)',
    'rgba(204, 51, 153, 0.5)',
    'rgba(153, 0, 102, 0.5)',
    'rgba(243, 196, 251, 0.5)',
  ],
  borderColor: [
    'rgba(111, 82, 59, 1)',
    'rgba(183, 105, 53, 1)',
    'rgba(179, 137, 93, 1)',
    'rgba(186, 12, 12, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(230, 96, 99, 1)',
    'rgba(255, 135, 0, 1)',
    'rgba(255, 211, 0, 1)',
    'rgba(222, 255, 10, 1)',
    'rgba(161, 255, 10, 1)',
    'rgba(39, 163, 0, 1)',
    'rgba(10, 255, 153, 1)',
    'rgba(10, 239, 255, 1)',
    'rgba(20, 125, 245, 1)',
    'rgba(88, 10, 255, 1)',
    'rgba(190, 10, 255, 1)',
    'rgba(204, 51, 153, 1)',
    'rgba(153, 0, 102, 1)',
    'rgba(243, 196, 251, 1)',
  ],
};

const ReportAnalytics = () => {
  const chartYears = {
    labels: [
      '<1980',
      '1980-1985',
      '1985-1990',
      '1990-1995',
      '1995-2000',
      '2000-2005',
      '2005-2010',
      '>2010',
    ],
    datasets: [
      {
        data: [
          yearData_80,
          yearData_8085,
          yearData_8590,
          yearData_9095,
          yearData_9500,
          yearData_0005,
          yearData_0510,
          yearData_10,
        ],
        backgroundColor: chartConfig.backgroundColor,
        borderColor: chartConfig.borderColor,
        borderWidth: 2,
      },
    ],
  };

  const chartGenre = {
    labels: [
      'Drama',
      'Horror',
      'Thriller',
      'Crime',
      'Musical',
      'Romance',
      'Sci-Fi',
      'Documentary',
      'Comedy',
      'Adventure',
      'Action',
      'War',
      'Fantasy',
      'Mystery',
      'Film-Noir',
      'Western',
      'Children',
      'Unknown',
    ],
    datasets: [
      {
        data: [
          DramaG,
          HorrorG,
          ThrillerG,
          CrimeG,
          MusicalG,
          RomanceG,
          SciFiG,
          DocumentaryG,
          ComedyG,
          AdventureG,
          ActionG,
          WarG,
          FantasyG,
          MysteryG,
          FilmNoirG,
          WesternG,
          ChildrenG,
          OtherG,
        ],
        backgroundColor: chartConfig.backgroundColor,
        borderColor: chartConfig.borderColor,
        borderWidth: 2,
      },
    ],
  };

  const chartCountry = {
    labels: [
      'France',
      'Italy',
      'Spain',
      'Germany',
      'Sweden',
      'Denmark',
      'Norway',
      'Portugal',
      'China',
      'Japan',
      'South Korea',
      'Turkey',
      'Argentina',
      'Poland',
      'India',
      'Netherlands',
      'Russia',
      'Brazil',
      'Canada',
      'Mexico',
    ],
    datasets: [
      {
        data: [
          FranceC,
          ItalyC,
          SpainC,
          GermanyC,
          SwedenC,
          DenmarkC,
          NorwayC,
          PortugalC,
          ChinaC,
          JapanC,
          SouthKoreaC,
          TurkeyC,
          ArgentinaC,
          PolandC,
          IndiaC,
          NetherlandsC,
          RussiaC,
          BrazilC,
          CanadaC,
          MexicoC,
        ],
        backgroundColor: chartConfig.backgroundColor,
        borderColor: chartConfig.borderColor,
        borderWidth: 2,
      },
    ],
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Report and Analytics</h3>
      <p className='first-line paragraph'>
        Here you can view graphs that present interesting statistics about the
        movie database (partially made-up data). These graphs make part-to-whole
        relationships easy to grasp at a glance.
      </p>
      <p className='last-line paragraph'>
        These graphs were created with the help of{' '}
        <i>
          <b>chart.js</b>
        </i>{' '}
        and{' '}
        <i>
          <b>react-chartjs-2</b>
        </i>{' '}
        packages. You can mousehover over the pie and doughnut charts to check
        out info about each slice. You can also click on the legend labels in
        order to filter what you want to see.
      </p>
      <div className='charts'>
        <div className='pie-chart'>
          <Pie
            data={chartYears}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    display: true,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                  },
                  title: {
                    display: true,
                    text: 'Year',
                    position: 'top',
                    font: {
                      weight: 'bold',
                      size: 25,
                    },
                    padding: {
                      top: 25,
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className='doughnut-chart'>
          <Doughnut
            data={chartGenre}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    display: true,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                  },
                  title: {
                    display: true,
                    text: 'Genre',
                    position: 'top',
                    font: {
                      weight: 'bold',
                      size: 25,
                    },
                    padding: {
                      top: 25,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportAnalytics;
