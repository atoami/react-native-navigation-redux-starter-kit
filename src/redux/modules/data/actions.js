// @flow

import { createAction } from 'redux-actions';

export const FETCH_DATA = 'data/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'data/FETCH_DATA_SUCCESS';

export const fetchDataActionCreators = {
  fetchData: createAction(FETCH_DATA),
  fetchDataSuccess: createAction(FETCH_DATA_SUCCESS)
};
