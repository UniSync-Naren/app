'use client'
import styles from './WeekBar.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { WeekBarProps } from '@/components/interface';

export default function WeekBar(props: WeekBarProps) {
  return (
    <div className={styles.weekbar}>
        <WestIcon onClick = {props.handleLeftPress}/>
        <div className={styles.weektext}>
          Week {`${props.weekNumber}`}
        </div>
        <EastIcon  onClick = {props.handleRightPress} />
    </div>
  );
}