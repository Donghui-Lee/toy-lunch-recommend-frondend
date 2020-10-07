import { ActionType } from 'typesafe-actions';
import { AsyncState } from './../../lib/reducerUtils';
import * as actions from './actions';
import { AuthInfo } from '../common/types';

export interface LoginInfo {
    username: string;
    password: string;
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
