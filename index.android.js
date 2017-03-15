/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Navigator } from 'react-native';

import TestRoute from './examples/TestRoute'
import DemoRoute from './app/DemoRoute'
import DemoIndex from './app/DemoIndex'

import Login from './app/Login/Login'
import Root from './app/Root'
import Route from './app/Route'

export default class Demo extends Component {
    render() {
    //return(
 		//<View>
 			//<DemoIndex />
 		//</View>

 	//);
    return (
        //<DemoRoute /> Use this one to revert
        //<Login />
        <Route />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Demo', () => Demo);
