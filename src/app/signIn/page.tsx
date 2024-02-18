'use client'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import HomeLayout from '../layouts/HomeLayout';
import SignInPage from '@/components/Auth/SignInPage/SignInPage';

export default function Courses() {
  return (
    <HomeLayout>
        <Provider store={store}>
        <SignInPage/>
        </Provider>
    </HomeLayout>
  );
}