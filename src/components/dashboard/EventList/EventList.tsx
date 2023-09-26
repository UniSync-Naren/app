'use client'
import EventItem from './EventItem/EventItem';
import styles from './EventList.module.css'
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { EventItemsList } from '@/components/interface';

export default function EventList() {

  const [eventList, setEventList] = useState([])


  async function fetchData() {
    try {
      let request = {
        method: 'GET',
        url: 'https://d83vwx2tsc.execute-api.ap-southeast-1.amazonaws.com/Prod/event',
        params: {
          username: 'naren999'
        }
      };
      
      //Convert to EventList from response format
      const response = await axios(request);
      console.log(response)
      var newEventList = response.data.events.map((item: any) => {
        return {eventid: item.eventid.S,
        username: item.username.S, 
        eventType: item.eventType.S,
        courseid: item.courseid.S,
        startTime: item.startTime.S,
        endTime: item.endTime.S, 
        graded: item.graded.N,
      }
      });

      // Use alpha numeric to sort events by date
      newEventList.sort((a : any, b : any) => a.startTime.localeCompare(b.startTime));
      console.log(newEventList)
        setEventList(newEventList);
        console.log(eventList)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className={styles.gradientCards}>
      {eventList.map((item: any) => <EventItem key= {item.eventid} eventType={item.eventType} courseid={item.courseid} endTime={item.endTime} graded={item.graded}/>)}
    </div>
  );
}