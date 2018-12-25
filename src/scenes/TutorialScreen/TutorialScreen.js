// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { pushAuthentication } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class TutorialScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => pushAuthentication()}>
          <Text>Click here to back to login page!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TutorialScreen;
