import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initalAuthState = {
    username: "naren999", 
}

export const authSlice = createSlice(
    {
        name: "auth",
        initialState: initalAuthState,
        reducers: {
            
        }
    }
)