import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserType} from "../../types/types";
import axios from "axios";
import {Alert} from "react-native";
import {AuthenticateProps, BASE_URL} from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            const response = await axios.post<UserType>(`${BASE_URL}/Users/authenticate`, authData);

            dispatch(setUser(response.data));
            const authToken = response.data.token;

            await AsyncStorage.setItem('token', authToken);
            return response.data;

        } catch (e) {
            console.log(e);
            Alert.alert('неправильный телефон или пароль')
            return rejectWithValue('error');
        }
    },
);
