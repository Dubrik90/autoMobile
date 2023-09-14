import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from "./api";

const axiosWithToken = axios.create({
    baseURL: BASE_URL,
});

axiosWithToken.interceptors.request.use(async (config) => {
    try {
        const user = await AsyncStorage.getItem('user');

        if (user) {
            const userData = JSON.parse(user);
            const token = userData.token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        console.error('Ошибка при получении токена из AsyncStorage:', error);
        return config;
    }
});

export default axiosWithToken;
