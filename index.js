import { Navigation } from 'react-native-navigation';
import { pushAuthentication } from 'AppNavigator';

Navigation.events().registerAppLaunchedListener(() => pushAuthentication());
