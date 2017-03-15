import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity,
   TouchableHighlight,
   StatusBar
} from 'react-native'

import Index from './DemoIndex'
//import Login from './DemoLogin'

import MyPickups from './Hauler/MyPickups'
import DemoItem from './Hauler/DemoItem'

import MyListings from './Poster/MyListings'
import NewListing from './Poster/NewListing'
import NewListingContinued from './Poster/NewListingContinued'

import Root from './Root'
import Login from './Login/Login'
import Map from './Map/Map'
import Register from './Login/Register'


export default class Route extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{ title: 'LoginScreen', name: 'Login' }}
                renderScene = { this.renderScene }
                style={{paddingBottom: 0}} //FIXME: Sloppy way to prevent nav bar from overlaying contents
                /*navigationBar={
								<Navigator.NavigationBar
									routeMapper={{
									  LeftButton: (route, navigator, index, navState) =>
									  {
										    if (route.title == "LoginScreen") {
										      return null;
										    } else {
										      return (
										        <TouchableHighlight onPress={() => navigator.pop()}>
										          <Text>Back</Text>
										        </TouchableHighlight>
										      );
										    }
										},
									  RightButton: (route, navigator, index, navState) =>
									  { 
                                        //return null; 
                                         return (
										        <TouchableHighlight onPress={() => navigator.pop()}>
										          <Text>Forward</Text>
										        </TouchableHighlight>
										      );
                                        }, //TODO: use for DONE button on posting
									  Title: (route, navigator, index, navState) =>
									   { return (<Text>{route.title}</Text>); },
									}}
									style={{backgroundColor: 'red', bottom: 0, top: null}}
									/>
                                    
						  }*/
            />
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'Login') {
            return (
                <Login
                    navigator = { navigator }
                    {...route.passProps}
                />
            )
        }

    {/*Routes*/}
        if (route.name == 'Map') {
            return (
                <Map
                    navigator = { navigator }
                    username = { route.username }
                    // {...route.passProps}
                />
            )
        }
        
        if (route.name == 'Register') {
            return (
                <Register
                    navigator = { navigator }
                    username = { route.username }
                    // {...route.passProps}
                />
            )
        }
        
        if (route.name == 'MyPickups') {
            // console.log("in Router to MyPickups" + route.username);
            return (
                <MyPickups
                    navigator = { navigator }
                    username = { route.username }
                    // {...route.passProps}
                />
            )
        }

        if (route.name == 'DemoItem') {
            // console.log("in Router to DemoItem" + route.username);
            return (
                <DemoItem
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'Root') {
            // console.log("in Router to Root" + route.username);
            return (
                <Root
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }


    {/*Poster Routes*/}

        if (route.name == 'MyListings') {
            // console.log("in Router " + route.username);
            return (
                <MyListings
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }
        if (route.name == 'NewListing') {
            // console.log("in Router " + route.username);
            return (
                <NewListing
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }
        if (route.name == 'NewListingContinued') {
            // console.log("in Router to NewListingContinued " + route.username);
            return (
                <NewListingContinued
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }
    }
}
