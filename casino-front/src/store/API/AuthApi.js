import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiClient  from "../../utils/ApiClient";
import { hostUrl, loginUrl, signUpUrl } from "../../utils/constants";

 export const logIn = createAsyncThunk(
    'post/login',
    async (data, { rejectWithValue }) => {
        const body = { login: data.login, password: data.password };
        try {
            const response = await ApiClient.post(
                loginUrl,
                JSON.stringify(body)
            );
            return response.data;
        } catch (err) {
            if (err.isAxiosError) {
                if (err.response.status !== 0) {
                    return rejectWithValue({ status:err.response.status });
                }
                return rejectWithValue({ data: { error: 'Сервер не доступен!' } });
            }
            return rejectWithValue({ data: { error: 'Неизвестная ошибка ' + err } });
        }
    }
);

export const signUp = createAsyncThunk(
    'post/reg',
    async (data, { rejectWithValue }) => {
        const body = { login: data.login, password: data.password };
        try {
            const response = await ApiClient.post(
                signUpUrl,
                JSON.stringify(body)
            );
            return response.data;
        } catch (err) {           
            if (err.isAxiosError) {
                if (err.response.status !== 0) {
                    return rejectWithValue({ status:err.response.status });
                }
                return rejectWithValue({ data: { error: 'Сервер не доступен!' } });
            }
            return rejectWithValue({ data: { error: 'Неизвестная ошибка ' + err } });
        }
    }
);

export const balance = createAsyncThunk(
    'get/bal',
    async (data, { rejectWithValue }) => {
        try {
            const response = await ApiClient.get(
                "/profile/balance"
            );
            return response.data;
        } catch (err) {  
                   
            if (err.isAxiosError) {
                if (err.response.status !== 0) {
                    return rejectWithValue({ status:err.response.status });
                }
                return rejectWithValue({ data: { error: 'Сервер не доступен!' } });
            }
            return rejectWithValue({ data: { error: 'Неизвестная ошибка ' + err } });
        }
    }
);

