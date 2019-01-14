// @flow

import React from 'react';
import { Navigation } from 'react-native-navigation';

import { WelcomeScreen, LoginScreen, SingleAppScreen } from 'AppScreens';
import { Provider } from 'AppRedux';

import { WELCOME_SCREEN, LOGIN_SCREEN, SINGLE_APP_SCREEN } from './Screens';

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
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  Navigation.registerComponent(SINGLE_APP_SCREEN, () => WrappedComponent(SingleAppScreen));
  console.info('All screens have been registered...');
}
