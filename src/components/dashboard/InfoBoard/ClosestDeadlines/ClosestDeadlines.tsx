import React from 'react';
import { Event, ClosestDeadlineProps, AssignmentType, ExamType, EventType } from '@/components/interface';
import styles from './ClosestDeadlines.module.scss'

export const ClosestDeadlines = (props: ClosestDeadlineProps) => {

  // Function to calculate the difference in days
  const calculateDaysRemaining = (startTime: Date) => {
    const today = new Date();
    const timeDiff = startTime.getTime() - today.getTime(); // Difference in milliseconds
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days
    return daysRemaining;
  };

  return (
    <div className={styles.closestDeadlines}>
      <div className={styles.title}>Upcoming Deadlines</div>
      <div>
      {props.closestDeadlines.length > 0 ? (
        <ul>
          {props.closestDeadlines.map((event: Event) => (
            <li key={event.eventid}>
              {event.courseid} ({event.eventType})
              <span className={styles.grade}>{event.graded}%</span>
              <span> - {calculateDaysRemaining(new Date(event.startTime))} days remaining</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming deadlines.</p>
      )}
      </div>
    </div>
  );
};

