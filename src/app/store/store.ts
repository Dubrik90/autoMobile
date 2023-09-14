import { configureStore } from '@reduxjs/toolkit'
import userReducer, {loadUserFromStorage} from "../slice/userSlice";
import carsSlice from "../slice/carsSlice";
import scannerSlice from "../slice/scanerSlice";



export const store = configureStore({
    reducer: {
        user: userReducer,
        car: carsSlice,
        scanner: scannerSlice
    },
})


store.dispatch(loadUserFromStorage());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
