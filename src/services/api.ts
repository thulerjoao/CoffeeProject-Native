import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3333/',
  baseURL: 'http://192.168.1.107:3333/',
});

Api.interceptors.request.use(async (config: any) => {
  try {
    const getToken = async () =>{
      return await AsyncStorage.getItem('token');
    }
    const token = await getToken()
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.contentType= 'application/json';
    }

    return config;
  } catch (error: any) {}
});

export default Api;
