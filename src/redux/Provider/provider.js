// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from '../store';

let store;

class AppStoreProvider extends PureComponent {
  getChildContext() {
    return {
      store,
    };
  }

  static contextTypes = {
    emitter: PropTypes.shape({}),
  };

  static childContextTypes = {
    store: PropTypes.shape({})
  };

  render() {
    const { emitter } = this.context;
    const { children } = this.props;

    store = store || createStore({ emitter });

    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
}

export default AppStoreProvider;
