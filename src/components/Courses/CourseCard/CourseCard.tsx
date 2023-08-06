import { CourseCardProps } from '@/components/interface';
import CourseGrid from '../CourseGrid/CourseGrid';
import styles from './CourseCard.module.scss'

export default function CourseCard(props: CourseCardProps) {
    return (
        <div className={styles.card}>
          <div className={styles.containerCard}>
            <div className={styles.bgGreenBox}>
              <text className={styles.cardTitle}>{props.name}</text>
              <p className={styles.cardDescription}>{props.code}</p>
            </div>
          </div>
        </div>
      );
}