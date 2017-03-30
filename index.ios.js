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


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class Demo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('Demo', () => Demo);
