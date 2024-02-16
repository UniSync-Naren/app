'use client'
import {AddCardProps } from '@/components/interface';
import styles from './AddCard.module.scss'
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function AddCard(props: AddCardProps) {
    return (
        <div className={styles.card} onClick={props.handleClick}>
          <div className={styles.containerCard}>
              <AddBoxIcon/>
          </div>
        </div>
      );
}