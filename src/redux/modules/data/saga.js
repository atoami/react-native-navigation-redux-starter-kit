// @flow

import { App_Service } from 'AppServices';

import {
  take,
  put,
  call,
  fork,
  all
} from 'redux-saga/effects';

import {
  FETCH_DATA,
  fetchDataActionCreators
} from './actions';

export function* asyncFetchData({ payload }) {

  const { url, method, params } = payload;

  try {
    const response = yield call(App_Service, { url, method, params });

    if (response.result === 'ok') {
      yield put(fetchDataActionCreators.fetchDataSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchFetchData() {
  while (true) {
    const action: Action = yield take(FETCH_DATA);
    yield* asyncFetchData(action);
  }
}

export default function* (): Iterable {
  yield all([
    fork(watchFetchData)
  ]);
}
