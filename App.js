// @flow

import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginScene, DashboardScene } from 'AppScenes';
import { Provider } from 'AppRedux';
import createStore from './src/redux/store/store';

const store = createStore();

const RouterWithRedux = connect()(Router);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux showNavigationBar={true}>
          <Scene key="root">
            <Scene key="main" title="Main" component={LoginScene} initial={true} hideNavBar />
            <Scene key="dashboard" title="Dashboard" component={DashboardScene} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
