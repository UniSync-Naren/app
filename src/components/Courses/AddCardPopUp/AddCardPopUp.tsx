import { AddCardPopUpProps } from '@/components/interface';
import styles from './AddCardPopUp.module.scss'

export default function AddCardPopUp(props: AddCardPopUpProps) {
    return props.trigger ? (
        <div className={styles.popUp}>
          <div className={styles.popUpInner}>
          <div>
            <h1>Add your Course</h1>
            <form>
                <label>Course Name</label>
                <input type="text" name="name" onChange={props.handleInput} value={props.formData.name}/>
                <label>Course Code</label>
                <input type="text" name="code" onChange={props.handleInput} value={props.formData.code}/>
                <button onClick={props.addCourse}>Submit</button>
            </form>
            </div>
          </div>
        </div>
      ) : 
      (
        <div></div>
      )
}