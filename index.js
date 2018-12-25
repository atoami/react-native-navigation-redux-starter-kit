import { Navigation } from 'react-native-navigation';
import { pushTutorialScreen } from 'AppNavigator';

Navigation.events().registerAppLaunchedListener(() => pushTutorialScreen());
