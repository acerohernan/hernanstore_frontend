import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchData = (token: string = "") => {
  const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (token) {
    /* Config para consultas privadas */
    let instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function (config: AxiosRequestConfig) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return instance;
  } else {
    /* Config para consultas públicas */
    let instance = axios.create(defaultOptions);
    return instance;
  }
};
