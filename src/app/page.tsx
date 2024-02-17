'use client'
import HomePage from "@/components/HomePage/HomePage"
import { store } from "@/store/store"
import { Provider } from "react-redux"
import HomeLayout from "./layouts/HomeLayout"


export default function Home() {
  return (
    <HomeLayout>
      <Provider store={store}>
        <HomePage/>
      </Provider>
    </HomeLayout>
  )
}