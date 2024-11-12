import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/counter/authSlice'


export const store = configureStore({
    reducer: {
        authToken: authReducer,
    },
})