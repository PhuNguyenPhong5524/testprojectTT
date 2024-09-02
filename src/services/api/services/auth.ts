import { get, post } from '../axios/axios';
import { type User } from '../models/models';

const prefix = '/auth/v1';

export async function login(username: string, password: string): Promise<User | undefined> {
  const url = `${prefix}/login`;
  try {
    const response = await post<User>(url, { username, password });
    return response?.data;
  } catch (error) {
    console.error('Error in query:', error);
    throw new Error('Login failed. Please try again later.');
  }
}

export async function me(): Promise<User | undefined> {
  const url = `${prefix}/me`;
  try {
    const response = await get<User>(url);
    return response.data;
  } catch (error) {
    console.error('Error in query:', error);
    throw new Error('Login failed. Please try again later.');
  }
}
