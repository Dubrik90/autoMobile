import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../slice/userSlice";
import carsSlice from "../slice/carsSlice";
import scannerSlice from "../slice/scanerSlice";



export const store = configureStore({
    reducer: {
        user: userReducer,
        car: carsSlice,
        scanner: scannerSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
