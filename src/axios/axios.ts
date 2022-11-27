/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:56:44
 * @LastEditTime: 2022-11-27 11:01:50
 * @Description:
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const request = axios.create({
  baseURL: import.meta.env.ENV_baseurl,
  timeout: 3000,
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default request;
