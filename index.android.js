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

import Root from './app/Root'

export default class Demo extends Component {
    render() {
    //return(
 		//<View>
 			//<DemoIndex />
 		//</View>

 	//);
    return (
        <DemoRoute />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Demo', () => Demo);
