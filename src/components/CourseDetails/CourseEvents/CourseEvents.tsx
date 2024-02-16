import AddEvent from "../AddEvent/AddEvent"
import EventList from "../EventList/EventList"
import styles from "./CourseEvents.module.scss"



export default function CourseEvents() {

    return (
        <div className={styles.courseEventsContainer}>
            <div className={styles.AddEventContainer}>
            <AddEvent/>
            </div>
            <div className={styles.eventListContainer}>
            <EventList/>
            </div>
        </div>
    )

}