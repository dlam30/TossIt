import React, { Component } from 'react'
import {
   View, Text, Button, TextInput
} from 'react-native'

import HaulerRoute from './Hauler/HaulerRoute'
import PosterRoute from './Poster/PosterRoute'
export default class DemoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'TestUser',
                      password: 'password'}
        //this._isPressHauler = this._isPressHauler.bind(this);
        //this._isPressPoster = this._isPressPoster.bind(this);
    }
    render() {
        return (
            <View>
                <Text>Username: </Text>
                <TextInput
                    style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    // onChangeText = {(text) => this.setState({ text })}
                    // placeholder = 'Type here'
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
        this.props.navigator.push({
            title: 'My Listings',
            name: 'MyListings',
            username: this.state.username
        })
    }
}