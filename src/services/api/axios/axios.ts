import axios, { type AxiosInstance } from 'axios';

import { ENV } from '../../server-config';

interface ApiResponse<T> {
  data?: T;
  error?: T;
}

const RestApi: AxiosInstance = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default RestApi;

export async function get<T>(url: string, params?: unknown): Promise<ApiResponse<T>> {
  try {
    const response = await RestApi.get<ApiResponse<T>>(url, {
      params,
      headers: {
        Authorization: localStorage.getItem('custom-auth-token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in get:', error);
    throw new Error('Get failed. Please try again later.');
  }
}

export async function post<T>(url: string, body?: unknown): Promise<ApiResponse<T>> {
  try {
    const response = await RestApi.post<ApiResponse<T>>(url, body, {
      headers: {
        Authorization: localStorage.getItem('custom-auth-token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in post:', error);
    throw new Error('Post failed. Please try again later.');
  }
}
