import React from 'react';
import { Event, ClosestDeadlineProps } from '@/components/interface';
import styles from './ClosestDeadlines.module.scss'

export const ClosestDeadlines = (props : ClosestDeadlineProps) => {  

  return (
    <div className= {styles.closestDeadlines}>
      <div>Closest Deadlines</div>
      <div>
      {props.closestDeadlines.length > 0 ? (
        <ul>
          {props.closestDeadlines.map((event : Event) => (
            <li key={event.eventid}>
              {event.courseid} - {new Date(event.endTime).toLocaleString()} ({event.eventType})
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