import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class CustomeInput extends Component {

constructor(props){
  super(props);
}

  render() {
    const {placeholder,value,onChangeText,onSubmitEditing} = this.props
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:5,
  },
  input: {
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'skyblue',
  },
})
