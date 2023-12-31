'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { AddEventDetails, Event, ClassType, ExamType, AssignmentType, EventType} from '@/components/interface';
import './AddEvent.scss';

export default function AddEvents() {
  const classTypes: string[] = Object.values(ClassType);
  const examTypes: string[] = Object.values(ExamType);
  const assignmentTypes: string[] = Object.values(AssignmentType);
  const allEventTypes: string[] = [...classTypes, ...examTypes, ...assignmentTypes];

  const [eventDetails, setEventDetails] = useState<AddEventDetails>({
    startTime: '',
    endTime: '',
    date: '',
    eventType: ExamType.exam,
    isGraded: false,
    repeat: false,
    repeatType: 'daily',
    repeatFrequency: 1, // New field for repetition frequency
    repeatEndType: 'never',
    repeatEndDate: '',
  });

  const [code, setCode] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted event details:', eventDetails);
  
    // Create a list to store repeated events
    const repeatedEvents: Event[] = [];

    // Add the original event
    const startHours = parseInt(eventDetails.startTime.split(':')[0], 10);
    const startMinutes = parseInt(eventDetails.startTime.split(':')[1], 10);
    const startTime = new Date(eventDetails.date);

    const endHours = parseInt(eventDetails.endTime.split(':')[0], 10);
    const endMinutes = parseInt(eventDetails.endTime.split(':')[1], 10);
    const endTime = new Date(eventDetails.date);

    startTime.setHours(startHours, startMinutes);
    endTime.setHours(endHours, endMinutes);

    repeatedEvents.push({
      eventid: '0', // You need to define a function to generate a unique ID
      username: 'naren999',
      eventType: eventDetails.eventType,
      courseid: code,
      startTime: startTime,
      endTime: endTime,
      graded: eventDetails.isGraded,
    });
  
    // If event should be repeated
    if (eventDetails.repeat) {
      const { repeatType, repeatFrequency, repeatEndDate } = eventDetails;
      let currentDate = new Date(eventDetails.date);
  
      // Generate repeated events based on the repeat type
      while (currentDate <= new Date(repeatEndDate)) {
        // Skip the first occurrence as it's already added
        if (currentDate.getTime() !== new Date(eventDetails.date).getTime()) {
          const startHours = parseInt(eventDetails.startTime.split(':')[0], 10);
          const startMinutes = parseInt(eventDetails.startTime.split(':')[1], 10);
          const startTime = new Date(currentDate);

          const endHours = parseInt(eventDetails.endTime.split(':')[0], 10);
          const endMinutes = parseInt(eventDetails.endTime.split(':')[1], 10);
          const endTime = new Date(currentDate);

          startTime.setHours(startHours, startMinutes);
          endTime.setHours(endHours, endMinutes);
          repeatedEvents.push({
            eventid: '0',
            username: 'naren999',
            eventType: eventDetails.eventType,
            courseid: code,
            startTime: startTime,
            endTime: endTime,
            graded: eventDetails.isGraded,
          });
        }
  
        // Increment the date based on the repeat type
        switch (repeatType) {
          case 'daily':
            currentDate.setDate(currentDate.getDate() + repeatFrequency);
            break;
          case 'weekly':
            currentDate.setDate(currentDate.getDate() + repeatFrequency * 7);
            break;
          case 'Every N days':
            currentDate.setDate(currentDate.getDate() + repeatFrequency);
            break;
          default:
            break;
        }
      }
    }
  
    console.log('Repeated events:', repeatedEvents);
    // You can now use the 'repeatedEvents' list as needed, for example, send it to an API or store it in state.
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // Type assertion to handle both input and select elements
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    if (name === 'eventType') {
      setEventDetails({ ...eventDetails, [name]: newValue as EventType });
    } else {
      setEventDetails({ ...eventDetails, [name]: newValue });
    }
};

useEffect(() => {
  // Get the current URL
  const currentUrl = window.location.href;
  console.log("URL", currentUrl)
  const extractedCode = currentUrl.split('/').pop();
  console.log("Extracted Code:", extractedCode)
  if (extractedCode != undefined){
    setCode(extractedCode)
  }
  }, []);

  return (
    <div className="form-container">
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={eventDetails.startTime}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={eventDetails.endTime}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
        Event Type:
        <select
          name="eventType"
          value={eventDetails.eventType}
          onChange={handleInputChange}
        >
          <option value="">Select Event Type</option>
          {allEventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
        <br />

        <label>
          Graded:
          <input
            type="checkbox"
            name="isGraded"
            checked={eventDetails.isGraded}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Repeat:
          <input
            type="checkbox"
            name="repeat"
            checked={eventDetails.repeat}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {eventDetails.repeat && (
          <div>
            <label>
              Repeat Type:
              <select
                name="repeatType"
                value={eventDetails.repeatType}
                onChange={handleInputChange}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="custom">Every N Days</option>
              </select>
            </label>
            <br />

            {eventDetails.repeatType === 'custom' && (
              <label>
                Repeat Every N Days:
                <input
                  type="number"
                  name="repeatFrequency"
                  value={eventDetails.repeatFrequency}
                  onChange={handleInputChange}
                  min={1}
                />
              </label>
            )}

            <br />

            <label>
              Repeat Until:
              <select
                name="repeatEndType"
                value={eventDetails.repeatEndType}
                onChange={handleInputChange}
              >
                <option value="never">Never</option>
                <option value="endDate">Until Date</option>
              </select>
            </label>
            <br />

            {eventDetails.repeatEndType === 'endDate' && (
              <label>
                Repeat Until Date:
                <input
                  type="date"
                  name="repeatEndDate"
                  value={eventDetails.repeatEndDate}
                  onChange={handleInputChange}
                />
              </label>
            )}
          </div>
        )}

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}