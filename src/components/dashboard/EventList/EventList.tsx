'use client'
import { EventListProps } from '@/components/interface';
import EventItem from './EventItem/EventItem';
import styles from './EventList.module.css'
import { ChangeEvent, useEffect, useState } from 'react';

export default function EventList(props : EventListProps) {
  return (
    <div className={styles.gradientCards}>
      {props.weekList.map((item: any) => <EventItem key= {item.eventid} eventType={item.eventType} courseid={item.courseid} endTime={item.endTime} graded={item.graded}/>)}
    </div>
  );
}