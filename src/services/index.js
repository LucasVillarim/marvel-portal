import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public'
})

export default axiosInstance;