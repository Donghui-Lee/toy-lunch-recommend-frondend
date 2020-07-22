import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtils';
import * as actions from './actions';

interface AuthInfo {
  username: string;
  snsId: string;
  snsDiv: string;
  name: string;
  email: string;
  token: string;
}

export interface LoginInfo {
  snsId: string;
  snsDiv: string;
  email: string;
  name: string;
  accessToken: string;
}

export interface LoginResponse {
  status: string;
  data: AuthInfo;
}

export type AuthState = {
  isAuth: boolean;
  auth: AsyncState<LoginResponse, Error>;
};

export type AuthAction = ActionType<typeof actions>;
