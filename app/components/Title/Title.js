import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    width:350,
    justifyContent:'center',
    height:40,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
  container:{
      paddingTop: 40,
  }
})
