'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./EventList.module.scss"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import EventItem from "./EventItem/EventItem";
import { Event } from "../../interface";

interface EventListProps {
  events: Event[];
}


export default function EventList({ events }: EventListProps) {
    
      
      return (
<div className={styles.eventListContainer}>
  <h2>Event List</h2>
  {events.length > 0 ? (
    <div>
      {events.map((event) => (
        <EventItem key={event.eventid} event={event} />
      ))}
    </div>
  ) : (
    <p>No events found.</p>
  )}
</div>
      );
    }