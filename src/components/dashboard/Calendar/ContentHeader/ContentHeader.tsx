import styles from './ContentHeader.module.css'
import WeekBar from './WeekBar/WeekBar';

export default function ContentHeader() {
  return (
    <div className={styles.contentheader}>
      <WeekBar/>
    </div>
  );
}