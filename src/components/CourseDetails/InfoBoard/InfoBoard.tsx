import styles from './InfoBoard.module.scss';
import AddEvent from '../AddEvent/AddEvent';
import { Event } from '@/components/interface';

interface AddEventInterface{
  addEvent: (event: Event) => void
}

export default function InfoBoard({addEvent }: AddEventInterface) {

  return (
    <div className={styles.infoboard}>
      <AddEvent addEvent={addEvent}/>
    </div>
  );
}

