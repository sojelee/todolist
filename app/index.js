import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './screens/Todo';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/todos'

export default class App extends React.Component {
  render() {
    const store = createStore(reducer)
    return (
      <View style={styles.container}>
         <Provider store={store}>
           <Todo />
         </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
