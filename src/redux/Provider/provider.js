// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import type { Store } from 'redux';
import { Provider } from 'react-redux';
import createStore from '../store';

let store: ?Store<*>;

class AppStoreProvider extends PureComponent {
  getChildContext(): { store: Store<*> } {
    return {
      store,
    };
  }

  static childContextTypes = {
    store: PropTypes.object
  };

  render() {
    store = store || createStore();
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default AppStoreProvider;
