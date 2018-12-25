// @flow

import React from 'react';
import { Navigation } from 'react-native-navigation';

import { LoginScreen, DashboardScreen } from 'AppScreens';
import { Provider } from 'AppRedux';

import { LOGIN_SCREEN, DASHBOARD_SCREEN } from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  Navigation.registerComponent(DASHBOARD_SCREEN, () => WrappedComponent(DashboardScreen));
  console.info('All screens have been registered...');
}
