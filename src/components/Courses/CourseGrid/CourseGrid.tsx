import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseGrid.module.scss'
import AddCard from '../AddCard/AddCard';
import {CourseGridProps} from '../../interface'

export default function CourseGrid(props: CourseGridProps) {
  return (
    <div className={styles.gradientCards}>
      {props.courseList.map(item => <CourseCard key={item.code} name={item.name} code={item.code}/>)}
      <AddCard/>
    </div>
  );
}