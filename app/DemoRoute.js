import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'

import Index from './DemoIndex'
import Login from './DemoLogin'
import MyListings from './Poster/MyListings'
import NewListing from './Poster/NewListing'



export default class TestRoute extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{ title: 'Index', name: 'Index' }}
                renderScene = { this.renderScene }
            />
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'Index') {
            return (
                <Index
                    navigator = { navigator }
                    {...route.passProps}
                />
            )
        }
        if (route.name == 'MyListings') {
            // console.log("in Router " + route.username);
            return (
                <MyListings
                    navigator = { navigator }
                    username = { route.username }
                />
            )
        }
        if (route.name == 'NewListing') {
            // console.log("in Router " + route.username);
            return (
                <NewListing
                    navigator = { navigator }
                    username = { route.username }
                />
            )
        }
    }
}
