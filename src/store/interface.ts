export interface semesterState {
    startDate: Date; 
    endDate: Date;
}

export interface AuthState {
    username: string | null;
    isAuthenticated: boolean;
}