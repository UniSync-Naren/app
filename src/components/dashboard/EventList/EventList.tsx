'use client'
import { EventListProps, Event } from '@/components/interface';
import styles from './EventList.module.scss'
import { ChangeEvent, useEffect, useState } from 'react';
import EventItem from './EventItem/EventItem';

export default function EventList(props: EventListProps) {
  // Group events by day
  const eventsByDay: { [key: string]: Event[] } = {};
  console.log("weekList:", props.weekList)
  props.weekList.forEach((item: Event) => {
    const dayOfWeek = new Date(item.startTime).toLocaleDateString('en-US', { weekday: 'long' });
    if (!eventsByDay[dayOfWeek]) {
      eventsByDay[dayOfWeek] = [];
    }
    eventsByDay[dayOfWeek].push(item);
  });

  return (
    <div className={styles.eventList}>
        {Object.entries(eventsByDay).map(([day, events]) => (
          <div key={day} className={styles.daylist}>
            <div className={styles.dayCards}>{day}</div>
            {/* Sort events based on start time */}
            {events
              .slice() // Create a shallow copy to avoid mutating the original array
              .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
              .map((item: Event) => (
                <EventItem
                  key={item.eventid}
                  startTime={item.startTime}
                  eventType={item.eventType}
                  courseid={item.courseid}
                  endTime={item.endTime}
                  graded={item.graded}
                />
              ))}
          </div>
        ))}
    </div>
  );

}