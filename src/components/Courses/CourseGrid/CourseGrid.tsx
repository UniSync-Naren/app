import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseGrid.module.scss'
import AddCard from '../AddCard/AddCard';

export default function CourseGrid() {
  return (
    <div className={styles.gradientCards}>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <AddCard/>
    </div>
  );
}