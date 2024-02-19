import styles from './EventItem.module.css';
import { EventItemProps } from '../../../interface';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function EventItem(props: EventItemProps) {
  const startTime = new Date(props.startTime); // Assuming it's the start time, you can adjust accordingly
  const endTime = new Date(props.endTime);
  console.log("Start Time: ", startTime, ", End Time: ", endTime)

  const formatTime = (time: Date) => {
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };

  return (
    <div className={styles.eventitem}>
      <div className={styles.icon}>
        {/* <CalendarTodayOutlinedIcon style={{ color: '#333' }}/> */}
      </div>
      <div className={styles.eventContent}>
        <div className={styles.eventname}>
          <span>{props.eventType}</span>
          <span>{props.courseid}</span>
        </div>
        <div className={styles.eventtime}>
          {`${formatTime(startTime)} - ${formatTime(endTime)}`}
          {props.graded && <span className={styles.grade}>Grade: {props.graded}%</span>}
        </div>
      </div>
    </div>
  );
}
