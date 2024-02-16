import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { semesterState } from '../interface'


const initalSemesterState = {
    startDate: new Date('2024-01-15T00:00'),
    endDate: new Date('2024-05-09T00:00')
}

export const semSlice = createSlice(
    {
        name: "semester",
        initialState: initalSemesterState,
        reducers: {
           newSem: (state, action: PayloadAction<semesterState>) => {
                return {
                    startDate : action.payload.startDate, 
                    endDate : action.payload.endDate
                }
           } 
        }
    }
)

export const {newSem} = semSlice.actions;
export const semReducer = semSlice.reducer;