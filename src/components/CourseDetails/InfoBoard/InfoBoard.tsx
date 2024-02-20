import styles from './InfoBoard.module.scss';
import AddEvent from '../AddEvent/AddEvent';

export default function InfoBoard() {

  return (
    <div className={styles.infoboard}>
      <AddEvent/>
    </div>
  );
}

