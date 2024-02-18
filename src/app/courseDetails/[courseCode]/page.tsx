'use client'
import CourseEvents from "@/components/CourseDetails/CourseEvents/CourseEvents"
import { store } from "../../../store/store"
import { Provider } from "react-redux"
import SignedLayout from "@/app/layouts/SignedLayout"


export default function Home() {
  return (
    <SignedLayout>
      <main>
      <Provider store={store}>
        <CourseEvents />
      </Provider>
      </main>
    </SignedLayout>
  )
}