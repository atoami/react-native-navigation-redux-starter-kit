// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { get } from 'lodash';
import Config from 'react-native-config';

import { pushTutorialScreen } from 'src/navigation';
import { connectData } from 'src/redux';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SingleAppScreen extends PureComponent {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    const { data } = this.props;

    switch (buttonId) {
      case 'nav_logout_btn': {
        pushTutorialScreen();
        break;
      }
      case 'nav_user_btn': {
        Alert.alert(get(data, 'user.name', 'Unknown User'));
        break;
      }
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {Config.API_URL}
        </Text>
      </View>
    );
  }
}

SingleAppScreen.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default connectData()(SingleAppScreen);
