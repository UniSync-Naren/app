'use client'
import Calendar from "@/components/Dashboard/Calendar/Calendar"
import { store } from "@/store/store"
import { Provider } from "react-redux"
import SignedLayout from "../layouts/SignedLayout"


export default function Home() {
  return (
    <SignedLayout>
      <main>
        <Provider store={store}>
        <Calendar/> 
        </Provider>
      </main>
    </SignedLayout>
  )
}