import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CarType} from "../../types/types";
import axiosWithoutToken from "../../api/axiosWithoutToken";

export type PageType = number

interface carState {
    cars: CarType[],
    loading: boolean,
    error: string | null,
    currentPage: number,
    activeCar: CarType | null
}

const initialState: carState = {
    cars: [],
    loading: false,
    error: null,
    currentPage: 1,
    activeCar: null
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setActiveCar: (state, action: PayloadAction<CarType>) => {
            state.activeCar = action.payload
        }
    },
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
export const {setActiveCar} = carSlice.actions
export default carSlice.reducer;

export const getCars = createAsyncThunk<CarType[], PageType>(
    'cars/getCars',
    async (currentPage, ThunkApi) => {
        const {dispatch, rejectWithValue} = ThunkApi;
        try {
            const response = await axiosWithoutToken.post<CarType[]>(`Parse/FilterCarSearch`, {
                page: currentPage,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
);
