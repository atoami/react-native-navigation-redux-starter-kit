import { Navigation } from 'react-native-navigation';
import { pushTutorialScreen } from 'src/navigation';

Navigation.events().registerAppLaunchedListener(() => pushTutorialScreen());
