/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var MyObjcClass = require('NativeModules').MyObjcClass;


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {MyObjcClass.greeting}
      </Text>
      <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)}/>
      <Text style={styles.result}>
      {this.state.number}
      </Text>
      </View>
      )
  }

  squareMe(num) {
    if (num == '') {
      return
    }
    MyObjcClass.squareMe(num, (error, number) => {
      if (error) {
        console.error(error);
      }else{
        this.setState({
          number: number
        });
      }
    });
  }
}
 var styles = StyleSheet.create({
  container : {
    flex :1,
    justifyContent : 'center',
    backgroundColor : '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
 });
