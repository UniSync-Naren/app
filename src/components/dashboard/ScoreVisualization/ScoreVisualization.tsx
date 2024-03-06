import { ScoreVisualizationProps } from '@/components/interface';
// ScoreVisualization.jsx (or .tsx if using TypeScript)
import React from 'react';
import styles from './ScoreVisualization.module.scss'; // Adjust the path as necessary

const ScoreVisualization = (props: ScoreVisualizationProps) => {

  return (
    <div className={styles.scoreVisualizationContainer}>
      {props.scores.map((score, index) => (
        <div
          key={index}
          className={`${styles.scoreSquare} ${styles[score.toLowerCase()]} ${index === props.currentWeek ? styles.highlight : ''}`}
        />
      ))}
    </div>
  );
};

export default ScoreVisualization;