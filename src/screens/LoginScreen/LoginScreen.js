// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connectData } from 'AppRedux';
import { apiConfig } from 'AppConfig';
import { pushDashboard } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class LoginScreen extends PureComponent {

  componentDidMount() {
    const { fetchData } = this.props;

    // call redux action
    fetchData({ url: apiConfig.api_endpoint, method: 'GET', params: null });
  }

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => pushDashboard()}>
          <Text>Click here!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connectData()(LoginScreen);
