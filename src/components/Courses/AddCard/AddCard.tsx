'use client'
import styles from './AddCard.module.scss'
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function AddCard() {
    return (
        <div className={styles.card}>
          <div className={styles.containerCard}>
            <div className={styles.bgGreenBox}>
          <AddBoxIcon/>
            </div>
          </div>
        </div>
      );
}