// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#039893',
    width: 230,
    marginTop: 30,
    borderRadius: 25
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain'
  },
  logoTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
  }
});

class WelcomeScreen extends PureComponent {

  handleGetStartAction = () => {

  };

  render() {
    return (
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          source={require('img/images/logo.png')}
        />
        <Text style={styles.logoTitle}>
          {'Welcome to RNN v2 Starter Kit!'}
        </Text>
        <Button
          onPress={this.handleGetStartAction}
          title={'Get Started'}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
