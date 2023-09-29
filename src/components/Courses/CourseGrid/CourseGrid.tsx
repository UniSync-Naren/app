import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseGrid.module.scss'
import AddCard from '../AddCard/AddCard';
import {CourseGridProps} from '../../interface'
import { ChangeEvent, useState } from 'react';
import AddCardPopUp from '../AddCardPopUp/AddCardPopUp';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function CourseGrid(props: CourseGridProps) {

  const [popUpTrigger, setPopUpTrigger] = useState(false);

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    code: ""
  });

  const openPopUp = () => {
    setPopUpTrigger(true);
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const  addCourse = async () => {
    try {
      let request = {
        method: 'POST',
        url: 'https://d83vwx2tsc.execute-api.ap-southeast-1.amazonaws.com/Prod/course',
        data: JSON.stringify({
          username: 'naren999',
          code: formData.code, 
          name: formData.name,
        }),
      };

      const response = await axios(request);
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log("added");
    console.log(formData.name);
    console.log(formData.code);
    setPopUpTrigger(false);
  }

  const handleClick = (code : string) => {
    const link = '/courseDetails/' + code
    router.push(link)
  }


  return (
    <div className={styles.gradientCards}>
      {props.courseList.map(item => 
      <CourseCard key={item.code} name={item.name} code={item.code} handleClick = {handleClick}/>
      )}
      <AddCard handleClick={openPopUp} />
      <AddCardPopUp trigger={popUpTrigger} formData={formData} handleInput={handleInput} addCourse={addCourse}/>
    </div>
  );
}