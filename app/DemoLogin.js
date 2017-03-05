import React, { Component } from 'react'
import {
   View, Text, TouchableHighlight, TextInput
} from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Hello { this.props.username }</Text>
                <TouchableHighlight onPress = {() => {
                    this.props.navigator.popToTop()
                }}>
                    <Text>Log out</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
