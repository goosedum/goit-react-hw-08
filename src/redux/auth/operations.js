import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        setAuthToken(persistedToken);
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
