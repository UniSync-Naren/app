import { ContentHeaderProps } from '@/components/interface';
import styles from './ContentHeader.module.css'
import WeekBar from './WeekBar/WeekBar';

export default function ContentHeader(props : ContentHeaderProps) {
  return (
    <div className={styles.contentheader}>
      <WeekBar handleRightPress = {props.handleRightPress} handleLeftPress = {props.handleLeftPress} weekNumber = {props.weekNumber}/>
    </div>
  );
}