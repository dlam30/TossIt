import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class MyPickups extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'TestUser',
                      password: 'password'}
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView><Text>List of pickups goes here</Text></ScrollView>
                
                <View>
            
                    <Button
                        onPress = {this._isPress}
                        style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                        title = 'DemoItem'
                        color = 'black'>
                    </Button>
                
                </View>
            </View>

        )
    }

    _isPress = () => {
        this.props.navigator.push({
            title: 'Demo Item',
            name: 'DemoItem',
            // username: this.state.username
        })
    }
}
