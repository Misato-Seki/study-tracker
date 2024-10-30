import axios from "axios";

// Base URL
// https://vite.dev/guide/env-and-mode
const isDevelopment = import.meta.env.MODE === "development";
const baseURL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_PROD;

// Create Axios Instance
// https://axios-http.com/docs/instance
const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Give JWT token automaticaly when request
// https://axios-http.com/docs/interceptors
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
