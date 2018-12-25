// @flow

import { fork, all } from 'redux-saga/effects';
import {
  dataSaga
} from '../modules';

export default function* rootSaga() {
  yield all([
    fork(dataSaga)
  ]);
}
