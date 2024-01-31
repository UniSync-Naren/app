'use client'
import React, { useEffect, useState } from 'react';
import ContentHeader from '../ContentHeader/ContentHeader';
import EventList from '../EventList/EventList';
import styles from './Calendar.module.css'
import axios from 'axios';
import { Event, EventItemsList, ClassType, ExamType, AssignmentType, EventType } from '@/components/interface';

export default function Calendar() {

  const getMondays = (startDate: Date, endDate : Date) => {
    const result = [];
    const currentDate = new Date(startDate);
  
    // Check if the start date is not a Monday and add it to the result
    if (currentDate.getDay() !== 1 /* Monday */) {
      result.push(new Date(currentDate));
    }
  
    // Find the next Monday from the start date
    while (currentDate.getDay() !== 1 /* Monday */) {
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    // Loop through the dates, adding 7 days at a time, until we reach the end date
    while (currentDate < endDate) {
      result.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 7);
    }
    result.push(new Date(currentDate));
  
    return result;
  }

  const filterEvents = (startTime : Date, endTime : Date) => {
    // Filter the eventList based on start and end time filters
    const filteredEvents = eventList.filter((event : Event) => {

      const isAfterStartTime = new Date(event.startTime) >= startTime;
      const isBeforeEndTime = new Date(event.startTime) < endTime;

      // console.log(new Date(event.startTime), startTime, isAfterStartTime, isBeforeEndTime)

      return isAfterStartTime && isBeforeEndTime;
    });

    return filteredEvents;
  }

  const [startDates, setStartDates] = useState(getMondays(new Date('2023-09-05T00:00'), new Date('2023-12-15T00:00')))
  const [weekCounter, setWeekCounter] = useState(0);
  const [eventList, setEventList] = useState([])
  const [weekList, setWeekList] = useState(filterEvents(startDates[0], startDates[1]))

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
      setEventList(newEventList);
      setWeekList(filterEvents(startDates[weekCounter], startDates[weekCounter + 1]))
      // console.log("Event List:", eventList)
      // console.log("week list : ", weekList)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    console.log(startDates)
    fetchData();
  }, []);

  const increaseWeek = () => {
    if (weekCounter < startDates.length - 2) {
      setWeekCounter(weekCounter + 1)
      setWeekList(filterEvents( startDates[weekCounter + 1], startDates[weekCounter + 2]))
      console.log(weekCounter + 1, startDates[weekCounter + 1], startDates[weekCounter + 2])
    }
  }

  const decreaseWeek = () => {
    if (weekCounter > 0) {
      setWeekCounter(weekCounter - 1)
      setWeekList(filterEvents( startDates[weekCounter - 1], startDates[weekCounter ]))
      console.log(weekCounter - 1, startDates[weekCounter - 1], startDates[weekCounter])
    }
  }

  const calculateWorkload = (eventList: EventItemsList, dates: Date[]) => {
    let totalTime = 0;
    let totalGrade = 0;
    const eventNum = eventList.events.length
    let weekTimes = new Array(dates.length).fill(0)
    let weekGrades = new Array(dates.length).fill(0)
    let weekScores = new Array(dates.length).fill(0)

    //Calculate total time and grades to calculate score later
    for(let i = 0;i < eventNum; i++) {
      const currEvent = eventList.events[i]

      const startTime = currEvent.startTime.getTime();
      const endTime = currEvent.endTime.getTime();
      const timeDifferenceInMinutes = (endTime - startTime) / (1000 * 60);
      totalTime += timeDifferenceInMinutes;
      totalGrade += currEvent.graded

    }

    //Calculating score for each week
    for(let i = 0;i < eventNum; i++) {
        let weekNum = 0
        const currEvent = eventList.events[i]
        for(let j = 0; j < dates.length - 1;j++){
            weekNum = j
            if (dates[j] < currEvent.startTime && dates[j + 1] > currEvent.startTime) {
                break
            }
        }
        // Calculate the time difference in minutes
        const startTime = currEvent.startTime.getTime();
        const endTime = currEvent.endTime.getTime();
        const timeDifferenceInMinutes = (endTime - startTime) / (1000 * 60);

        if (isClassType(currEvent.eventType)) {
          weekScores[weekNum] += timeDifferenceInMinutes/totalTime
        } 
        if (isAssignmentType(currEvent.eventType)) {
          weekScores[weekNum] += currEvent.graded/totalGrade
        } 
        if (isExamType(currEvent.eventType)) {
          weekScores[weekNum] += currEvent.graded/totalGrade
        } 
        
    }
    return weekScores
}

// Function to check if EventType is ClassType
const isClassType = (eventType: EventType): eventType is ClassType => {
  return (Object.values(ClassType) as string[]).includes(eventType as string);
}

// Function to check if EventType is AssignmentType
const isAssignmentType = (eventType: EventType): eventType is AssignmentType => {
  return (Object.values(AssignmentType) as string[]).includes(eventType as string);
}
// Function to check if EventType is ExamType
const isExamType = (eventType: EventType): eventType is ExamType => {
  return (Object.values(ExamType) as string[]).includes(eventType as string);
}


  return (
    <div className={styles.calendar}>
        <ContentHeader handleRightPress = {increaseWeek} handleLeftPress = {decreaseWeek} weekNumber = {weekCounter + 1}/>
        <EventList weekList = {weekList} />
    </div>
  );
}