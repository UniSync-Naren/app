import React from 'react';
import ContentHeader from '../ContentHeader/ContentHeader';
import EventList from '../EventList/EventList';
import styles from './Calendar.module.css'

export default function Calendar() {
  return (
    <div className={styles.calendar}>
        <ContentHeader/>
        <EventList/>
    </div>
  );
}