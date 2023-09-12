import axios from 'axios';
import {useNavigation} from "@react-navigation/native";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {setUser} from "../app/slice/userSlice";
import {CarType, UserType} from "../types/types";
import {Alert} from "react-native";

export const BASE_URL = 'http://83.222.9.150:443';

export type AuthenticateProps  = {
    phone: string,
    password: string
}


