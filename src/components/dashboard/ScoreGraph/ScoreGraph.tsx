import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './ScoreGraph.module.scss';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface ScoreGraphProps {
  scores: number[];
}

const ScoreGraph: React.FC<ScoreGraphProps> = ({ scores }) => {
  const data: ChartData<'line'> = {
    labels: scores.map((_, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: 'Scores',
        data: scores,
        fill: true,
        backgroundColor: '#020e20',
        borderColor: '#dfdfe9',
        borderWidth: 1,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Removes grid lines for x-axis
        },
        ticks: {
          color: '#fff', // Adjust tick label colors if needed
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Removes grid lines for y-axis
        },
        ticks: {
          color: '#fff', // Adjust tick label colors if needed
          stepSize: 5,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disables the legend
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Adjust the line thickness
      },
      point: {
        radius: 3, // Adjust the point radius
      },
    },
  };  

  return (
    <div className={styles.graphContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ScoreGraph;
