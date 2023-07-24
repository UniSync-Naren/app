import CourseGrid from '../CourseGrid/CourseGrid';
import styles from './CourseCard.module.scss'

export default function CourseCard() {
    return (
        <div className={styles.card}>
          <div className={styles.containerCard}>
            <div className={styles.bgGreenBox}>
              <text className={styles.cardTitle}>Data Structure and Algorithms</text>
              <p className={styles.cardDescription}>CS2040S NUS</p>
            </div>
          </div>
        </div>
      );
}