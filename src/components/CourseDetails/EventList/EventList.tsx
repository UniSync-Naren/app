"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {Event} from "../../interface"

export default function EventList() {
    const [eventList, setEventList] = useState([])
    // const [code, setCode] = useState("")

    async function fetchData(code : string) {
        console.log("Code: ", code)
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
          newEventList.sort((a : any, b : any) => a.startTime.localeCompare(b.startTime))
          console.log(newEventList);
          const filtered = newEventList.filter((a : any) => a.courseid == code)
          setEventList(filtered);
          console.log(filtered);
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;
        console.log("URL", currentUrl)
        const extractedCode = currentUrl.split('/').pop();
        console.log("Extracted Code:", extractedCode)
        if (extractedCode != undefined) {
          fetchData(extractedCode)
        }
      }, []);
      return (
        <div>
          <h2>Event List</h2>
          {eventList.length > 0 ? (
            <ul>
              {eventList.map((event : Event) => (
                <li key={event.eventid}>
                  <strong>{event.eventType}</strong> - {event.startTime.toLocaleString()} to {event.endTime.toLocaleString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events found.</p>
          )}
        </div>
      );
    }