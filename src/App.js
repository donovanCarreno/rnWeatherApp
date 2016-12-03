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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {Details} from './Details'
import {mockData} from '../mockData'

const autocompleteStyles = {
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    textAlign: 'center'
  },
  textInputContainer: {
    borderRadius: 10,
    height: 28,
    textAlign: 'center',
    width: 180
  },
  description: {
    textAlign: 'left'
  },
  listView: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 180
  }
}

const queryDetails = {
  key: 'AIzaSyDP6MAHzWr4Ky3GLm3YAQsh-qOGevkauTU',
  language: 'en',
  types: '(cities)'
}

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

  handleSubmit(data) {
    let address = data.description.split(',')
    address.pop()
    address = address.join(',')

    fetch(`https://donovan-weather-app.herokuapp.com/forecast/${address}`)
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
          {/* <TextInput
            style={styles.input}
            placeholder='City, ST'
            returnKeyType='go'
            onSubmitEditing={this.handleSubmit}
          /> */}
          <GooglePlacesAutocomplete
            styles={autocompleteStyles}
            placeholder='City, ST'
            autoFocus={false}
            query={queryDetails}
            onPress={this.handleSubmit}
            renderDescription={row => `${row.terms[0].value}, ${row.terms[1].value}`}
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
