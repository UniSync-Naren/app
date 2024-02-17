'use client'
import CourseContent from '@/components/Courses/CourseContent/CourseContent';
import styles from './Courses.module.scss'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import HomePage from '@/components/HomePage/HomePage';
import HomeLayout from '../layouts/HomeLayout';

export default function Courses() {
  return (
    <HomeLayout>
        <Provider store={store}>
        <HomePage/>
        </Provider>
    </HomeLayout>
  );
}