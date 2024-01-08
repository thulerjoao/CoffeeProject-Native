import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const Api: AxiosInstance = axios.create({
//   // baseURL: 'http://localhost:3333/',
//   baseURL: 'https://192.168.1.107:3333/',
// });

// Api.interceptors.request.use((config: any) => {
//   try {
//     const token = async () => await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   } catch (error: any) {}
// });

// export default Api;

export const baseURL = 'http://192.168.1.107:3000/';

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export const getAuthorizatedToken = async () => {
  return getItemStorage('AUTORIZATION_KEY');
};

export const getItemStorage = async (key: string) => AsyncStorage.getItem(key).catch(() => '');

export enum MethodEnum {
  GET = 'get',
  DELETE = 'delete',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
}

export const ERROR_AXIOS_DANIED = 'Sem permissão';

export const ERROR_CONNECTION = 'Erro de conexão';

export const ERROR_INVALID_USER = 'Usuário ou senha inválidos';

export const ERROR_INVALID_URL = 'Invalid URL';

export default class ConnectionApi {
  static async call<T, B = unknown>(
    url: string,
    method: MethodType,
    body?: B,
  ): Promise<T | undefined> {
    const token = await getAuthorizatedToken();
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Contente-Type': 'application/json',
      },
    };
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url, config)).data;
      case MethodEnum.PATCH:
      case MethodEnum.POST:
      case MethodEnum.PUT:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T, B = unknown>(
    url: string,
    method: MethodType,
    body?: B,
  ): Promise<T | undefined> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_AXIOS_DANIED);
          case 404:
            throw new Error(ERROR_INVALID_URL);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const ConnectionApiGet = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.GET);
};

export const ConnectionApiDelete = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.DELETE);
};

export const ConnectionApiPost = async <T, B = unknown>(
  url: string,
  body: B,
): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.POST, body);
};

export const ConnectionApiPut = async <T, B = unknown>(
  url: string,
  body: B,
): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PUT, body);
};

export const ConnectionApiPatch = async <T, B = unknown>(
  url: string,
  body: B,
): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PATCH, body);
};
