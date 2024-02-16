import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { semReducer } from "./features/semesterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
      auth: authReducer,
      semester: semReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;