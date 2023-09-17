import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserType} from "../../types/types";
import axios from "axios";
import {Alert} from "react-native";
import {AuthenticateProps, BASE_URL} from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosWithoutToken from "../../api/axiosWithoutToken";
import {getScanners} from "./scanerSlice";

interface UserState {
    user: UserType | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            if (action.payload) {
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const authenticate = createAsyncThunk<UserType, AuthenticateProps>(
    'login/authenticate',
    async (authData, ThunkApi) => {
        const { dispatch, rejectWithValue } = ThunkApi;
        try {
            const response = await axiosWithoutToken.post<UserType>(`${BASE_URL}/Users/authenticate`, authData);

            dispatch(setUser(response.data));
            const authToken = response.data.token;

             await AsyncStorage.setItem('token', authToken);
             await AsyncStorage.setItem('user', JSON.stringify(response.data));
            dispatch(getScanners())

            return response.data;

        } catch (e) {
            console.log(e);
            Alert.alert('неправильный телефон или пароль')
            return rejectWithValue('error');
        }
    },
);

export const loadUserFromStorage = createAsyncThunk(
    'user/loadUserFromStorage',
    async (_, { dispatch }) => {
        try {
            const user = await AsyncStorage.getItem('user');

            if (user) {
                const userData = JSON.parse(user);
                dispatch(setUser(userData));
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных пользователя из AsyncStorage:', error);
        }
    }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async (_, { dispatch }) => {
    try {
        await AsyncStorage.removeItem('user');
       // await AsyncStorage.removeItem('token');
        dispatch(setUser(null));

    } catch (error) {
        console.error('Ошибка при выходе из системы:', error);
    }
});
