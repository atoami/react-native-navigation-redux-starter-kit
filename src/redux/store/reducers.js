// @flow

import {
  data
} from '../modules';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
  data
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
