import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native'
import {Details} from './Details'
import {mockData} from '../mockData'

export default class App extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      address: '',
      daily: {},
      landing: true,
      summary: '',
      temp: null
    }
  }

  handleSubmit(e) {
    let address = e.nativeEvent.text

    fetch(`https://donovan-weather-app.herokuapp.com/forecast/${e.nativeEvent.text}`)
    .then(res => {
      res.json()
      .then(data => {
        let summary = data.hourly.summary
        let temp = Math.round(data.currently.temperature).toFixed(0)

        this.setState({
          address,
          daily: data.daily,
          landing: false,
          summary,
          temp
        })
      })
    })
    .catch(err => console.warn('error', err))
    // console.warn(JSON.stringify(e.nativeEvent, null, 2))
    // let {text} = e.nativeEvent

    StatusBar.setBarStyle('dark-content')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='City, ST'
            returnKeyType='go'
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        {this.state.landing ? (
          <Image source={require('./landing.jpg')} style={styles.image} />
        ) : (
          <Details
            address={this.state.address}
            daily={this.state.daily}
            summary={this.state.summary}
            temp={this.state.temp}
          />
        )}
      </ScrollView>
    )
  }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    height: 25,
    width: 180,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 30,
    paddingLeft: 10,
    textAlign: 'center'
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: height,
    width: width,
    zIndex: -1
  }
})
