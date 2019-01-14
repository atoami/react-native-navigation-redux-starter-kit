// @flow

import {
  GET_FACEBOOK_DATA_SUCCESS
} from './actions';

export const DEFAULT = {};

export default function data(state = DEFAULT, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case GET_FACEBOOK_DATA_SUCCESS: {
      return {
        ...state,
        user: payload
      };
    }
    default:
      return state;
  }
}
