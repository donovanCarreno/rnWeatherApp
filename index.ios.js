/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';
import App from './src/App'

export default class rnWeatherApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar barStyle={'dark-content'} />
        </View>
        <App />
        <View style={styles.footer}>
          <Text style={styles.url}>Powered by Dark Sky</Text>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: height
  },
  footer: {
    bottom: 0,
    width: width,
    borderTopWidth: 1,
    borderTopColor: 'black'
  },
  url: {
    color: 'black',
    textAlign: 'center'
  },
  statusBar: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 22
  }
});

AppRegistry.registerComponent('rnWeatherApp', () => rnWeatherApp);
