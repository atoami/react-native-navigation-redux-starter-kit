// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { LOGIN_SCREEN } from 'AppNavigator';

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
    Navigation.push(this.props.componentId, {
      component: {
        name: LOGIN_SCREEN,
        options: {
          topBar: {
            title: {
              text: 'LOGIN'
            }
          }
        }
      }
    });
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
          title={'Start Single Screen App'}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          onPress={this.handleGetStartAction}
          title={'Start Tab Based App'}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
