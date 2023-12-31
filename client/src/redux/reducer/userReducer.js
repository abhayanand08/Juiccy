import {createReducer} from '@reduxjs/toolkit'

const initialstate = {
    isAuthenticated: false,
};

export const Reducer = createReducer(initialstate,{
    LoadUserRequest: (state) => {
        state.loading = true;
    },
    LoadUserSuccess: (state,action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },
    LoadUserFail: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    updateUserInfoRequest: (state) => {
        state.loading = true;
    },
    updateUserInfoSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    updateUserInfoFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors : (state) => {
        state.error = null;
    },
});