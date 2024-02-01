import { InfoBoardProps } from '@/components/interface';
import styles from './InfoBoard.module.css'

export default function InfoBoard(props: InfoBoardProps) {
  return (
    <div className={styles.infoboard}>
      <div>
        Score: {props.weekScores[props.weekNum]}
      </div>
      <div>
        Level: {props.categorizedScores[props.weekNum]}
      </div>
    </div>
  );
}