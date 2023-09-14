import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {CarType} from "../../types/types";
import {BASE_URL} from "../../api/api";
import axiosWithoutToken from "../../api/axiosWithoutToken";

export type PageType = number

interface carState {
    cars: CarType[],
    loading: boolean,
    error: string | null,
    currentPage: number,
}

const initialState: carState = {
    cars: [],
    loading: false,
    error: null,
    currentPage: 1,
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.cars = [...state.cars, ...action.payload];
                state.loading = false;
                state.error = null;
            })
            .addCase(getCars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Произошла ошибка при загрузке данных о машинах';
            });
    },
});

export default carSlice.reducer;

export const getCars = createAsyncThunk<CarType[], PageType>(
    'cars/getCars',
    async (currentPage, ThunkApi) => {
        const {dispatch, rejectWithValue} = ThunkApi;
        try {
            const response = await axiosWithoutToken.post<CarType[]>(`${BASE_URL}/Parse/FilterCarSearch`, {
                page: currentPage,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
);
