import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginAsync } from './actions';
import { LoginResponse } from './types';

function* getLoginSaga(action: ReturnType<typeof loginAsync.request>) {
    try {
        // const loginResponse: LoginResponse = yield call(login, action.payload);
        // yield put(loginAsync.success(loginResponse));
    } catch (e) {
        // yield put(loginAsync.failure(e));
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, getLoginSaga);
}
