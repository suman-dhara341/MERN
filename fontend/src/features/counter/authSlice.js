import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    user: (() => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error parsing user from localStorage', error);
            return null;
        }
    })(),
    isAdmin: (() => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user).isAdmin || false : false;
        } catch (error) {
            console.error('Error parsing user for isAdmin', error);
            return false;
        }
    })(),
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
            
        },

        removeToken: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.isAdmin=false
        },

        setUser: (state, action) => {
            state.user = action.payload;
            state.isAdmin = action.payload?.isAdmin || false;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
    },
});

export const { setToken, removeToken, setUser } = authSlice.actions;

export default authSlice.reducer;
