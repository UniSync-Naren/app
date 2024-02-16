'use client'
import CourseEvents from "@/components/CourseDetails/CourseEvents/CourseEvents"
import { store } from "../../../store/store"
import { Provider } from "react-redux"


export default function Home() {
  return (
    <Provider store={store}>
    <main>
        <CourseEvents />
    </main>
    </Provider>
  )
}