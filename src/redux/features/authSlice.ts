import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initalAuthState = {
    username: "naren999", 
}

export const auth = createSlice(
    {
        name: "auth",
        initialState: initalAuthState,
        reducers: {
            
        }
    }
)

export const {} = auth.reducer;
export default auth.reducer;