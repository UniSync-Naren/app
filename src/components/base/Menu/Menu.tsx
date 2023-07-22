'use client'
 
import { useRouter } from 'next/navigation'
import MenuButton from '@/components/base/MenuButton/MenuButton';
import styles from './Menu.module.css';
import ProfileMenuButton from '../ProfileMenuButton/ProfileMenuButton';

export default function Menu() {
  const router = useRouter()

  const handleCalendarClick = () => {
    router.push('/calendar')
  }

  const handleCoursesClick = () => {
    router.push('/courses')
  }

  const handleEventsClick = () => {
    router.push('/addevents')
  }

  return (
    <div className= {styles.menu}>
      <ul className={styles.menulist}>
        <ProfileMenuButton/>
        <MenuButton handleClick={handleCalendarClick} content='Calendar'/>
        <MenuButton handleClick={handleCoursesClick} content='Courses'/>
        <MenuButton handleClick={handleEventsClick} content='Add Events'/>
      </ul>
    </div>
  );
}