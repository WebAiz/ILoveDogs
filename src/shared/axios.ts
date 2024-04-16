// axiosInterceptorInstance.js

import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;