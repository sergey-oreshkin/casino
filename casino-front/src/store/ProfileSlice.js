import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./API/AuthApi";
import { signUp } from "./API/AuthApi";
import { balance } from "./API/AuthApi";




const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        loggedIn: false,
        username: '',
        balance: 0,
        showModal: '',
        modalInfo: ''
    },
    reducers: {
        setShowModal: (state, action) => {
            state.showModal = action.payload;
            state.modalInfo = '';
        },
        logOut: (state) => {
            state.loggedIn = false;
            state.username = '';
            state.balance = 0;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(logIn.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.loggedIn = true;
                    console.log(123123123123123);
                    state.balance = payload.balance;
                    state.username = payload.username;
                    localStorage.setItem('token', payload.token);
                    state.modalInfo = '';
                    state.showModal = '';
                }
            })
            .addCase(logIn.rejected, (state, { payload }) => {
                console.log(payload);
                if (payload.status === 401) {
                    state.modalInfo = 'Invalid login or password';
                }
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.loggedIn = true;
                state.balance = payload.balance;
                state.username = payload.username;
                localStorage.setItem('token', payload.token);
                state.modalInfo = '';
                state.showModal = '';
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                if (payload.status === 409) {
                    state.modalInfo = 'Login already in use';
                }
            })
            .addCase(balance.fulfilled, (state, { payload }) => {
                
            })
    }
});

export const { setShowModal, logOut} = ProfileSlice.actions;

export default ProfileSlice.reducer;