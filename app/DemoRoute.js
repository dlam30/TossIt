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
                style={{paddingTop: 60}} //FIXME: Sloppy way to prevent nav bar from overlaying contents
                navigationBar={
								<Navigator.NavigationBar
									routeMapper={{
									  LeftButton: (route, navigator, index, navState) =>
									   { return (<Text>Cancel</Text>); },
									  RightButton: (route, navigator, index, navState) =>
									   { return (<Text>Done</Text>); },
									  Title: (route, navigator, index, navState) =>
									   { return (<Text>{route.title}</Text>); },
									}}
									style={{backgroundColor: 'orange'}}
									/>
						  }
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
