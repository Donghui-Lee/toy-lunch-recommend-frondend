import { ActionType } from 'typesafe-actions';
import { AsyncState } from './../../lib/reducerUtils';
import * as actions from './actions';
import { AuthInfo } from '../common/types';

export interface RegisterResponse {
    status: string;
    data: AuthInfo;
}

export interface RegisterInfo {
    username: string;
    password: string;
    passwordConfirm: string;
}

export type AuthState = {
    isAuth: boolean;
    auth: AsyncState<RegisterResponse, Error>;
};

export type AuthAction = ActionType<typeof actions>;
