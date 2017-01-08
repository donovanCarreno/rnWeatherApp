import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import reducers from './src/reducers'
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
import Footer from './src/Footer'

const store = createStore(reducers, {}, applyMiddleware(Thunk))

const rnWeatherApp = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar barStyle={'dark-content'} />
      </View>
      <App />
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  </Provider>
)

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
  statusBar: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 22
  }
});

AppRegistry.registerComponent('rnWeatherApp', () => rnWeatherApp);
