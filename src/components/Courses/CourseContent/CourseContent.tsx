import CourseGrid from '../CourseGrid/CourseGrid';
import styles from './CourseContent.module.scss'

export default function CourseContent() {
  return (
    <div className={styles.main}>
      <text className={styles.headerText}>
        My Courses
      </text>  
        <CourseGrid/>
    </div>
  );
}