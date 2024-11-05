import axios from "axios";


const BASE_URL = "https://fin-be-1.onrender.com/api" 

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   