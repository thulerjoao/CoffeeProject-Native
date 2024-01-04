import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/',
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {}
});

export default Api;
