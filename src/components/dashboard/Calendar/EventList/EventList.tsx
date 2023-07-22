import EventItem from './EventItem/EventItem';
import styles from './EventList.module.css'

export default function EventList() {
  return (
    <div className={styles.eventlist}>
      <ul className={styles.eventscroll}>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
      </ul>
    </div>
  );
}