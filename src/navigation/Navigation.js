// @flow

import { Navigation } from 'react-native-navigation';

import { WELCOME_SCREEN, SINGLE_APP_SCREEN } from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function pushTutorialScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893'
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
      style: 'dark'
    },
    layout: {
      orientation: ['portrait']
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: WELCOME_SCREEN,
            options: {
              topBar: {
                visible: false,
              }
            }
          }
        }]
      }
    }
  });
}

export function pushDashboard() {
  Navigation.setRoot({
    root: {
      component: {
        name: SINGLE_APP_SCREEN
      }
    }
  });
}
