import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {Day} from './Day'

export const Details = (props) => {
  return (
    <View style={styles.details}>
      <View style={styles.today}>
        <Text style={[styles.text, styles.summary]}>{props.summary}</Text>
        <Text style={[styles.text, styles.temp]}>{props.temp}&#8457;</Text>
        <Text style={styles.text}>{props.address}</Text>
      </View>
      <View style={styles.daily}>
        <Text style={styles.text}>Next 7 days</Text>
        {props.daily.data.map((day, i) => {
          if (i == 0) return
          return <Day key={day.time} day={day}/>
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  daily: {
    marginBottom: 5
  },
  today: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10
  },
  text: {
    marginBottom: 5,
    textAlign: 'center'
  },
  temp: {
    fontSize: 40
  },
  summary: {
    fontSize: 20
  }
})
