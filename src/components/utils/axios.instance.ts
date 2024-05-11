import axios from "axios";
import { store } from "../../redux/Store";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 60 * 60 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const { contentType, authorizationToken } = config.headers;

    
    if (contentType) {
      config.headers["Content-Type"] = contentType;
    }
    if (authorizationToken) {
      config.headers.Authorization = authorizationToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
