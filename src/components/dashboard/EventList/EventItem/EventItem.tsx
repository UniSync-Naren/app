import styles from './EventItem.module.css'
import {EventItemProps} from '../../../interface'

export default function EventItem(props: EventItemProps) {
  return (
    <div className={styles.eventitem}>
      <div className={styles.eventname}>
      {props.eventType}
      </div>
      <div className={styles.eventtime}>
        {props.endTime.toString()}
      </div>
    </div>
  );
}