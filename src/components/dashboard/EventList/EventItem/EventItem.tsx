import styles from './EventItem.module.css'

export default function EventItem() {
  return (
    <div className={styles.eventitem}>
      <text className={styles.eventname}>
      Lecture - Data Structures and Algorithms
      </text>
      <text className={styles.eventtime}>
      2pm - 5pm
      </text>
    </div>
  );
}