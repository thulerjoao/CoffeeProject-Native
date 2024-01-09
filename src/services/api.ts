import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3333/',
  baseURL: 'http://192.168.1.107:3333/',
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = async () => await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.contentType= 'application/json';
    }

    return config;
  } catch (error: any) {}
});

export default Api;
