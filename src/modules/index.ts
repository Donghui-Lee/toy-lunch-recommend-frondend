import { combineReducers } from 'redux';
import authStore from './auth/register';
import { all } from 'redux-saga/effects';
import { loginSaga } from './auth/login/sagas';
import { registerSaga } from './auth/register/sagas';

const rootReducer = combineReducers({
    authStore,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([loginSaga(), registerSaga()]);
}
