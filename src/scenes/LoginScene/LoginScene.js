// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class LoginScene extends PureComponent {

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => Actions.dashboard()}>
          <Text>Click here!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default (LoginScene);
