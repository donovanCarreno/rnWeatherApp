import React, { Component } from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class Footer extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      url: 'https://darksky.net/poweredby/'
    }
  }

  handleClick() {
    Linking.openURL(this.state.url)
      .catch(err => alert('error: ' + err))
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <Text style={styles.url}>Powered by Dark Sky</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  url: {
    color: 'black',
    textAlign: 'center'
  },
})
