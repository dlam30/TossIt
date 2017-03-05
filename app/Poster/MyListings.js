import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class MyListings extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'TestUser',
                      password: 'password'}
    }
    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView><Text>List of postings goes here</Text></ScrollView>
            <View>
                <Button
                    onPress = {this._isPress}
                    style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                    title = 'New'
                    color = 'black'>
                </Button>
                
                
            </View>
        </View>

        )
    }

    _isPress = () => {
        this.props.navigator.push({
            title: 'NewListing',
            name: 'NewListing',
            // username: this.state.username
        })
    }
}
