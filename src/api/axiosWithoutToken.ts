import axios from 'axios';
import {BASE_URL} from "./api";

const axiosWithoutToken = axios.create({
    baseURL: BASE_URL,
});

export default axiosWithoutToken;
