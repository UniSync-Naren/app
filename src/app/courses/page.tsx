'use client'
import CourseContent from '@/components/Courses/CourseContent/CourseContent';
import styles from './Courses.module.scss'
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function Courses() {
  return (
    <Provider store={store}>
      <CourseContent/>
    </Provider>
  );
}