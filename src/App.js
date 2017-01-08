import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import {Details} from './Details'
import {mockData} from '../mockData'

class App extends Component {
  handleSubmit(e) {
    let address = e.nativeEvent.text

    this.props.fetchWeather(address)

    StatusBar.setBarStyle('dark-content')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.inputView}>
          <TextInput
            value={this.props.address}
            autoCorrect={false}
            style={styles.input}
            placeholder='City, ST'
            onChangeText={this.props.addressChange}
            returnKeyType='go'
            onSubmitEditing={this.handleSubmit.bind(this)}
          />
        </View>
        <ActivityIndicator
          animating={this.props.loading}
          color="black"
          size="large"
        />
        {this.props.landing ? (
          <Image source={require('./landing.jpg')} style={styles.image} />
        ) : (
          <Details
            address={this.props.address}
            daily={this.props.daily}
            summary={this.props.summary}
            temp={this.props.temp}
          />
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  const { address } = state.address
  const { landing, daily, summary, temp, loading } = state.weatherData

  return {
    address,
    landing,
    daily,
    summary,
    temp,
    loading
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)

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
