import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class CustomeButton extends Component {

  render() {
    const {buttonText, onPress} = this.props

    return (

      <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{buttonText}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width:350,
    height:40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'skyblue',
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    textAlign: 'center',
    color: 'red',
  },
  container: {
    paddingBottom:5,
  },
})
