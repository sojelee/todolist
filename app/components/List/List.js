import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native'

export default class List extends Component {

  renderItem = ({text,author}, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(i)} key={i}
      >


        <View style={{flex: 1}}>
         <View>
            <Text>{text}</Text>
        </View>
          <View style={{alignItems:'flex-end'}}>
            <Text>Check</Text>
            <Text>x</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text>{author}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
  separator:{
    backgroundColor: 'purple',
    width: 400,
    height:1,
    marginTop:10,
  }
})
