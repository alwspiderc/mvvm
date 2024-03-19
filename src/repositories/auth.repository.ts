import {UserModel} from '../common/models/user.model';
import client from './client';

export interface loginDTO {
  email: string;
  password: string;
}

export const login = async ({email, password}: loginDTO) => {
  const {data} = await client.post<UserModel>('/session', {email, password});
  return data;
};
