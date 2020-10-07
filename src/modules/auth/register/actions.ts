import { createAsyncAction } from 'typesafe-actions';
import { RegisterResponse, RegisterInfo } from './types';
import { AxiosError } from 'axios';

export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST' as const;
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS' as const;
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE' as const;

export const loginAsync = createAsyncAction(
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
)<RegisterInfo, RegisterResponse, AxiosError>();
