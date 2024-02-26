import React from 'react';
import styles from './EventItem.module.scss';
import { Event } from '@/components/interface';
// Assuming Event interface is already defined as per your existing code

interface EventItemProps {
  event: Event;
}

const EventItem = (props : EventItemProps) => {
  const convertToSingaporeTime = (utcDate: string): string => {
    const date = new Date(utcDate);
    date.setHours(date.getHours() + 8); // Adjust for Singapore time (UTC+8)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }) + ', ' + date.toLocaleDateString('en-US');
  };

  return (
    <div className={styles.eventItem}>
      <div className={styles.eventTime}>
        {convertToSingaporeTime(props.event.startTime.toString())} to {convertToSingaporeTime(props.event.endTime.toString())}
      </div>
      <div className={styles.eventDetails}>
        <span className={styles.eventType}>{props.event.eventType}</span>
        {<span className={styles.eventGrade}>{props.event.graded}%</span>}
      </div>
    </div>
  );
};

export default EventItem;
