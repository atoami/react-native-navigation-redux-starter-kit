// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connectData } from 'AppRedux';
import { apiConfig } from 'AppConfig';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class LoginScene extends PureComponent {

  componentDidMount() {
    const { fetchData } = this.props;

    // call redux action
    fetchData({ url: apiConfig.api_endpoint, method: 'GET', params: null });
  }

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

LoginScene.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connectData()(LoginScene);
