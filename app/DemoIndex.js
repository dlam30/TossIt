import React, { Component } from 'react'
import {
   View, Text, Button, TextInput
} from 'react-native'
import ApiHandler from './API/ApiHandler'

import HaulerRoute from './Hauler/HaulerRoute'
import PosterRoute from './Poster/PosterRoute'
export default class DemoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                      password: 'password'}
    }
    render() {
        return (
            <View>
                <ApiHandler ref='db'/>
                <Text>Username: </Text>
                <TextInput
                    style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ username: text })}
                    placeholder = 'Type your username here'
                    value = { this.state.username }
                />
                <Text>Password: </Text>
                <TextInput
                    style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    value = { this.state.password }
                    // onChangeText = {(text) => this.setState({ text })}
                    secureTextEntry = { true }
                />
                <Button
                    onPress = {this._isPressPoster}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black' }}
                    title = 'Poster'
                    color = 'orange'>
                </Button>
                <Button
                    onPress = {this._isPressHauler} //FIXME: change to Hauler
                    style = {{height: 30, borderWidth: 1, borderColor: 'black' }}
                    title = 'Hauler'
                    color = 'blue'>
                </Button>
            </View>
        )
    }

    _isPressHauler = () => {
        this.props.navigator.push({
            title: 'My Pickups',
            name: 'MyPickups',
            username: this.state.username
        })
    }

    _isPressPoster = () => {
        var array = [];
        this.refs.db.getItem(this.state.username, (response) => {
            if (response) {
                for (var key in response) {
                    if (response.hasOwnProperty(key)) {
                        array.push(response[key]);
                    }
                }
                // console.log(array);
                this.props.navigator.push({
                    title: 'My Listings',
                    name: 'MyListings',
                    passProps: {
                        username: this.state.username,
                        array   : array
                    }
                    // username: this.state.username
                })
            }
        });
    }
}
