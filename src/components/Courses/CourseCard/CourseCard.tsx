import { CourseCardProps } from '@/components/interface';
import CourseGrid from '../CourseGrid/CourseGrid';
import styles from './CourseCard.module.scss'

export default function CourseCard(props: CourseCardProps) {
  console.log("Button pressed")
  const handleClick = () => {
    props.handleClick(props.code);
  };

    return (
        <div className={styles.card} onClick={handleClick}>
          <div className={styles.containerCard}>
            <div className={styles.bgGreenBox}>
              <div className={styles.cardTitle}>{props.name}</div>
              <p className={styles.cardDescription}>{props.code}</p>
            </div>
          </div>
        </div>
      );
}