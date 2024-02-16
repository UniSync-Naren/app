export interface semesterState {
    startDate: Date; 
    endDate: Date;
}

export interface AuthState {
    username: string | null;
    isAuthenticated: boolean;
}

// export interface RootState {
//     auth : {
//         username: string | null;
//         isAuthenticated: boolean;
//     }, 
//     semester : {
//         startDate: Date; 
//         endDate: Date;
//     }
// }