'use client'
import CourseContent from '@/components/Courses/CourseContent/CourseContent';
import styles from './Courses.module.scss'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import SignedLayout from '../layouts/SignedLayout';
import Home from '../page';

export default function Courses() {
  return (
    <SignedLayout>
      <Provider store={store}>
        <CourseContent/>
      </Provider>
    </SignedLayout>
  );
}