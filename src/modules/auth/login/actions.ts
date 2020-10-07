import { createAsyncAction } from 'typesafe-actions';
import { LoginResponse, LoginInfo } from './types';
import { AxiosError } from 'axios';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;

export const loginAsync = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
)<LoginInfo, LoginResponse, AxiosError>();
