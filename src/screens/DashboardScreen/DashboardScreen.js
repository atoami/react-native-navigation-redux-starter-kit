// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { pushTutorialScreen } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class DashboardScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => pushTutorialScreen()}>
          <Text>Click here to back to login page!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DashboardScreen;
