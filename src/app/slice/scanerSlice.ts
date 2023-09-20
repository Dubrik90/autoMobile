import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApdateScannerDataType, ResponseScannerDataType} from "../../types/scanerTypes";
import {BASE_URL} from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosWithToken from "../../api/axiosWithToken";

interface scannerState {
    scanners: ResponseScannerDataType[],
    loading: boolean,
    error: string | null,
    currentPage: number,
}

const initialState: scannerState = {
    scanners: [],
    loading: false,
    error: null,
    currentPage: 1,
};

const scannerSlice = createSlice({
    name: 'scanner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getScanners.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getScanners.fulfilled, (state, action) => {
                state.scanners = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getScanners.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Произошла ошибка при загрузке данных сканнера';
            })
    },
});

export default scannerSlice.reducer;


export const getScanners = createAsyncThunk<ResponseScannerDataType[]>(
    'scanner/getScanners',
    async (_, thunkAPI) => {
        try {
            const response = await axiosWithToken.post<ResponseScannerDataType[]>(`/Parse/GetUserScanners`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

type AddScannerResType = {
    status: string
}

export const addScanner = createAsyncThunk<AddScannerResType, ApdateScannerDataType>(
    'scanner/addScanner',
    async (newScanner, thunkAPI) => {
        try {
            const response = await axiosWithToken.post<AddScannerResType>(`/Parse/SetScanner`, newScanner);
            thunkAPI.dispatch(getScanners())
            return response.data;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2))
            throw error;
        }
    }
);
