// @flow

import { set, isEmpty } from 'lodash';

export default async function App_Service({ url, method, params }) {
  const headers = {};

  set(headers, 'Accept', 'application/json');
  set(headers, 'Content-Type', 'application/json');

  const reqBody = {
    method,
    headers
  };

  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params);
  }

  return fetch(url, reqBody)
    .then(response => response.json())
    .then((data) => {
      return {
        result: 'ok',
        data
      };
    })
    .catch(() => {
      return {
        result: 'error',
        message: 'Please check your internet connection!'
      };
    });
}
