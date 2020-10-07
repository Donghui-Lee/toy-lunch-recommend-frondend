import { takeLatest, call, put } from 'redux-saga/effects';
import { REGISTER_REQUEST, loginAsync } from './actions';

function* postRegisterSaga(action: ReturnType<typeof loginAsync.request>) {
    try {
        // const loginResponse: LoginResponse = yield call(login, action.payload);
        // yield put(loginAsync.success(loginResponse));
    } catch (e) {
        // yield put(loginAsync.failure(e));
    }
}

export function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, postRegisterSaga);
}
