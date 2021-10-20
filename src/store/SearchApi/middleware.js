import {getApiFailure, getApiRequest, getApiSuccess} from "./actions";
import {call, put, takeEvery} from 'redux-saga/effects';

const API_URL_PUBLIC = "https://www.breakingbadapi.com/api/characters";

function* getApiRecords() {
    try {
        const records = yield call(() => {
            return fetch(API_URL_PUBLIC).then(
                res => res.json()
            )
        });
        yield put(getApiSuccess(records))
    } catch (e) {
        yield put(getApiFailure(e))
    }

}

export function* apiSagaWatcher() {
    yield takeEvery(getApiRequest, getApiRecords)
}