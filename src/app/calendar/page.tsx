'use client'
import Calendar from "@/components/Dashboard/Calendar/Calendar"
import { store } from "@/store/store"
import { Provider } from "react-redux"


export default function Home() {
  return (
    <main>
      <Provider store={store}>
      <Calendar/> 
      </Provider>
    </main>
  )
}