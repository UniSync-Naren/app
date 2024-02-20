import EventList from "../EventList/EventList"
import InfoBoard from "../InfoBoard/InfoBoard"
import styles from "./CourseEvents.module.scss"



export default function CourseEvents() {

    return (
        <div className={styles.courseEventsContainer}>
            <div className={styles.eventListContainer}>
            <EventList/>
            </div>
            <div className={styles.infoboard}>
            <InfoBoard/>
            </div>
        </div>
    )

}