import React, { Component } from 'react'
import {
   View, Text, Button, TextInput
} from 'react-native'

export default class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'TestUser',
                      password: 'password'}
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <Text>Upload picture/picture displayed here</Text>
                </View>
                <View style={{flex: 1}}> 
                <Text>//FIXME: should be a scroll box</Text>
                <Text>Title: </Text>
                <TextInput
                    style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ text })}
                    placeholder = 'Type here'
                    value = { this.state.username }
                />
                <Text>Other stuff: </Text>
                <TextInput
                    style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    value = { this.state.password }
                    // onChangeText = {(text) => this.setState({ text })}
                    secureTextEntry = { true }
                />
                </View>
                <View style={{}}>
                <Button
                    onPress = {this._isPress}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black' }}
                    title = 'Post'
                    color = 'black'>
                </Button>
                </View>
            </View>

        )
    }

    _isPress = () => { //FIXME: Post it to the list - where is this? 
        // this.props.navigator.push({
        //     title: 'MyListings',
        //     name: 'MyListings',
        //     username: this.state.username
        // })
        this.props.navigator.pop()
    }
}
