import axios from "axios";


const BASE_URL = "https://finance-backend-g1be.onrender.com/api" 

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   