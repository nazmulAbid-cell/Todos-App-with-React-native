import { StatusBar } from 'expo-status-bar';
import React from "react"
import { useState } from 'react';
import { StyleSheet, Text, View ,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos]=useState([
    {text: 'buy coffe',key: 1},
    {text: 'create an app',key: 2},
    {text: 'play on the switch ',key: 3},
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text)=>{
    if (text.length >3){
      setTodos((prevTodos)=>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      });
    }else{
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          }
        ]
      );
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      //Keyboard.dismiss();
      
    }}>
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
      <View style={styles.list}>
        <FlatList
        data = {todos}
        renderItem ={
          ({item}) =>(
            <TodoItem item = {item} pressHandler = {pressHandler}></TodoItem>
          )}
        />
       
    </View>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40
  },
  list:{
    flex:1,
    marginTop: 20,

  }
});
