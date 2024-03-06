import { useEffect, useState } from "react"
import EventList from "../EventList/EventList"
import InfoBoard from "../InfoBoard/InfoBoard"
import styles from "./CourseEvents.module.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Event } from "@/components/interface"



export default function CourseEvents() {
    const [eventList, setEventList] = useState<Event[]>([])
    const username = useSelector((state : RootState) => state.auth.username)
    // const [code, setCode] = useState("")

    async function fetchData(code : string) {
        console.log("Code: ", code)
        try {
          let request = {
            method: 'GET',
            url: 'https://d83vwx2tsc.execute-api.ap-southeast-1.amazonaws.com/Prod/event',
            params: {
              username: username
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

      const addEvent = (newEvent : Event) => {
        setEventList((prevEvents) => [...prevEvents, newEvent]);
      };

      useEffect(() => {
        const currentUrl = window.location.href;
        console.log("URL", currentUrl)
        const extractedCode = currentUrl.split('/').pop();
        console.log("Extracted Code:", extractedCode)
        if (extractedCode != undefined) {
          fetchData(extractedCode)
        }
      }, []);

    return (
        <div className={styles.courseEventsContainer}>
            <div className={styles.eventListContainer}>
            <EventList events={eventList}/>
            </div>
            <div className={styles.infoboard}>
            <InfoBoard addEvent={addEvent} />
            </div>
        </div>
    )

}