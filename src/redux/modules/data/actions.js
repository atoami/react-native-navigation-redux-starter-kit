// @flow

import { createAction } from 'redux-actions';

export const GET_FACEBOOK_DATA = 'data/GET_FACEBOOK_DATA';
export const GET_FACEBOOK_DATA_SUCCESS = 'data/GET_FACEBOOK_DATA_SUCCESS';

export const fetchDataActionCreators = {
  getFacebookUserData: createAction(GET_FACEBOOK_DATA),
  getFacebookUserDataSuccess: createAction(GET_FACEBOOK_DATA_SUCCESS),
};
