// @flow

import { App_Service } from 'src/services';

import {
  take,
  put,
  call,
  fork,
  all
} from 'redux-saga/effects';

import {
  GET_FACEBOOK_DATA,
  fetchDataActionCreators
} from './actions';

export function* asyncGetFacebookUserData({ payload }) {

  const { facebookToken } = payload;

  // eslint-disable-next-line
  const url = `https://graph.facebook.com/v2.11/me?access_token=${facebookToken}&fields=id,name,email,picture{url}`;

  try {
    const response = yield call(App_Service, { url, method: 'GET' });

    if (response.result === 'ok') {
      yield put(fetchDataActionCreators.getFacebookUserDataSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetFacebookUserData() {
  while (true) {
    const action = yield take(GET_FACEBOOK_DATA);
    yield* asyncGetFacebookUserData(action);
  }
}

export default function* () {
  yield all([
    fork(watchGetFacebookUserData),
  ]);
}
