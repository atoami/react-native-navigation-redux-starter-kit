// @flow

import { Navigation } from 'react-native-navigation';

import { WELCOME_SCREEN, DASHBOARD_SCREEN } from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function pushTutorialScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: 'black'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    }
  });

  Navigation.setRoot({
    root: {
      component: {
        name: WELCOME_SCREEN
      }
    }
  });
}

export function pushDashboard() {
  Navigation.setRoot({
    root: {
      component: {
        name: DASHBOARD_SCREEN
      }
    }
  });
}
