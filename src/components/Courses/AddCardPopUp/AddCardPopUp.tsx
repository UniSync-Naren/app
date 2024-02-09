import { AddCardPopUpProps } from '@/components/interface';
import styles from './AddCardPopUp.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddCardPopUp(props: AddCardPopUpProps) {
  return props.trigger ? (
    <div className={styles.popUp}>
      <div className={styles.popUpInner}>
        <div>
          <div className={styles.topSection}>
            <ArrowBackIcon className={styles.arrow} onClick={() => props.setPopUpTrigger(false)}/>
            <text className={styles.headerText}>Add Your Course</text>
          </div>
          <form className= {styles.form}>
            <label>Course Name</label>
            <input type="text" name="name" onChange={props.handleInput} value={props.formData.name} />
            <label>Course Code</label>
            <input type="text" name="code" onChange={props.handleInput} value={props.formData.code} />
            <button onClick={props.addCourse}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
