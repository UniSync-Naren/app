'use client'
import { useEffect, useState } from 'react';
import CourseGrid from '../CourseGrid/CourseGrid';
import styles from './CourseContent.module.scss'
import axios from 'axios';


export default function CourseContent() {

  const [courseList, setCourseList] = useState([])


  async function fetchData() {
    try {
      let request = {
        host: 'myapi.execute-api.us-west-2.amazonaws.com',
        method: 'GET',
        url: 'https://jyjbq8yv5l.execute-api.ap-southeast-1.amazonaws.com/Prod/course',
        params: {
          username: 'naren999'
        }
      };

      const response = await axios(request);
      const newCourseList = response.data.courses.map((item: any) => {
        return {name: item.name.S,
        username: item.username.S, 
        code: item.code.S,
      }
      });
        setCourseList(newCourseList);
        console.log(response.data.courses);
        console.log(newCourseList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.main}>
      <text className={styles.headerText}>
        My Courses
      </text>  
        <CourseGrid courseList = {courseList}/>
    </div>
  );
}