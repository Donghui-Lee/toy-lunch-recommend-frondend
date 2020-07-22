import { createReducer } from 'typesafe-actions';
import { AuthState, AuthAction } from './types';
import { asyncState } from '../lib/reducerUtils';
import * as actions from './actions';

const initialState: AuthState = {
  isAuth: false,
  auth: asyncState.initial(),
};

const reducer = createReducer<AuthState, AuthAction>(initialState, {
  [actions.LOGIN_REQUEST]: (state) => ({
    ...state,
    isAuth: false,
    auth: asyncState.load(),
  }),
  [actions.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      isAuth: true,
      auth: asyncState.success(action.payload),
    };
  },
  [actions.LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      isAuth: false,
      auth: asyncState.error(action.payload),
    };
  },
});

export default reducer;
