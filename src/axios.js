import axios from "axios";


// const BASE_URL = "https://finance-backend-3-66el.onrender.com/api" 

const BASE_URL = "http://localhost:4003/api"

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   