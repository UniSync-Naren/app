import { InfoBoardProps } from '@/components/interface';
import styles from './InfoBoard.module.scss';
import { ClosestDeadlines } from './ClosestDeadlines/ClosestDeadlines';

export default function InfoBoard(props: InfoBoardProps) {
  console.log("Scores: ", props.weekScores)
  const score = props.weekScores[props.weekNum];
  const level = props.categorizedScores[props.weekNum];

  // Calculate the percentage for the progress bar
  const progressBarWidth = `${(score / 100) * 100}%`;

  return (
    <div className={styles.infoboard}>
      <div className={styles.scoreLevel}>
        <div className={styles.score}>
          <span className={styles.scoreLabel}>Score</span>
          <span className={styles.scoreValue}>{score}</span>
        </div>
        <div className={styles.level}>
          <span className={styles.levelLabel}>Level</span>
          <span className={`${styles.levelValue} ${styles[level.toLowerCase()]}`}>{level}</span>
        </div>
        <div className={`${styles.progressBar} ${styles.progressLevel} ${styles[level.toLowerCase()]}`} style={{ width: progressBarWidth }}></div>
        </div>
      <ClosestDeadlines closestDeadlines={props.closestDeadlines}/>
    </div>
  );
}

