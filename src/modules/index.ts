import { combineReducers } from 'redux';
import authStore from './auth';
import { all } from 'redux-saga/effects';
import { loginSaga } from './auth/sagas';

const rootReducer = combineReducers({
  authStore,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([loginSaga()]);
}
