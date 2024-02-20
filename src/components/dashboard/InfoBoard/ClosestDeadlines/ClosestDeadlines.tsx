import React from 'react';
import { Event, ClosestDeadlineProps } from '@/components/interface';

export const ClosestDeadlines = (props : ClosestDeadlineProps) => {  

  return (
    <div>
      <h2>Closest Deadlines</h2>
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
  );
};