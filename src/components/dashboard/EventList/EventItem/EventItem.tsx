import styles from './EventItem.module.css'

export default function EventItem() {
  return (
    <div className={styles.eventitem}>
      <div className={styles.eventname}>
      Lecture - Data Structures and Algorithms
      </div>
      <div className={styles.eventtime}>
      2pm - 5pm
      </div>
    </div>
  );
}