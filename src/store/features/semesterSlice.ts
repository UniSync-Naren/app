import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { semesterState } from '../interface'


const initalSemesterState = {
    startDate: new Date(),
    endDate: new Date()
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
export default semSlice.reducer;