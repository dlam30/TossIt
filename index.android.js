/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Navigator } from 'react-native';

import TestRoute from './examples/TestRoute'

export default class Demo extends Component {
    render() {
    return (
        <TestRoute />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Demo', () => Demo);
