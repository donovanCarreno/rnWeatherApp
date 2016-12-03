import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export const Day = (props) => {
  let {day} = props
  let date = new Date(day.time * 1000)
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let weekday = days[date.getDay()]

  return (
    <View style={styles.container}>
      <Text style={styles.forecast}>{weekday}</Text>
      <Text style={styles.forecast}>{Math.round(day.temperatureMax).toFixed(0)}&#8457;</Text>
      <Text style={styles.forecast}>{day.summary}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingTop: 3,
    paddingBottom: 3
  },
  forecast: {
    textAlign: 'center'
  }
})
