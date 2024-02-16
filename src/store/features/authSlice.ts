import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AuthState } from '../interface';


const initalAuthState: AuthState = {
    username: "naren999", 
    isAuthenticated: false
}

export const authSlice = createSlice(
    {
        name: "auth",
        initialState: initalAuthState,
        reducers: {
            login: (state, action: PayloadAction<string>) => {
                state.isAuthenticated = true;
                state.username = action.payload;
              },
              // Action to set the user as logged out
              logout: (state) => {
                state.isAuthenticated = false;
                state.username = null;
              },
        }
    }
)

export const { login, logout} = authSlice.actions;
export default authSlice.reducer;