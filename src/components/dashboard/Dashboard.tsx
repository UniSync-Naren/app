import Calendar from "./Calendar/Calendar"
import InfoBoard from "./InfoBoard/InfoBoard"
import Menu from "./Menu/Menu"
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
        <Menu/>
        <Calendar/>
        <InfoBoard/> 
    </div>
  )
}