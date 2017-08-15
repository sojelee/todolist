import React, { Component, PropTypes } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, ScrollView,StyleSheet } from 'react-native';
import { Title } from '../components/Title';
import { CustomeButton } from '../components/CustomeButton';
import { CustomeInput } from '../components/CustomeInput';
import { connect } from 'react-redux';
import { List } from '../components/List';
import { addTodo, removeTodo,textChange,authorChange,clearInputs } from '../actions/todos';

class Todo extends Component{
 handleTextChange = text =>{
     this.props.dispatch(textChange(text));

 }
 handleAuthorChange = author =>{
    this.props.dispatch(authorChange(author));
 }
 onSubmitEditing =()=>{
   const {text,author} = this.props
   this.props.dispatch(addTodo({text,author}));
   this.props.dispatch(clearInputs());
 }
  removeTodo=(index)=>{
  this.props.dispatch(removeTodo(index));
 }
  render(){

    const {todos,text,author} = this.props

    return(<View>
           <Title>Todo List</Title>

          <ScrollView style={styles.container}>

          <CustomeInput placeholder="Type a todo description" value={text} onChangeText={this.handleTextChange} />
          <CustomeInput placeholder="Type author's name, then hit enter!" value={author} onChangeText={this.handleAuthorChange}
           onSubmitEditing={this.onSubmitEditing} />
          <List
            list={todos}
            onPressItem={this.removeTodo}
          />
          </ScrollView>
           <CustomeButton buttonText="Remove Completed Items" />
          </View>
    )}
};
const mapStateToProps = (state) => ({
  todos: state.todos,
  author: state.author,
  text: state.text,
});

export default connect(mapStateToProps)(Todo)

const styles = StyleSheet.create({
  container: {
    padding:5,
  },
})
