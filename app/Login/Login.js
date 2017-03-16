import React, { Component } from 'react'
import {
   View, Text, TouchableHighlight, TextInput, Image, StyleSheet, Navigator,
   Dimensions, Button, StatusBar
} from 'react-native'

var {height, width} = Dimensions.get('window');

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                      password: ''}
    }
    render() {
        return (
            //<Image source = {require('../Images/ST.jpg')}
            <View style = {styles.container}>
                <Image source = {require('../Images/logo@3x.png')}>                   
                </Image>
            
                <Text style = {{color: 'white', fontFamily: 'sans-serif-medium', paddingTop: 56}}>
                    Pick up with TossIt
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ username: text })}
                    placeholder = 'Username'
                    value = { this.state.username }
                />
                <Text>
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ password: text })}
                    placeholder = 'Password'
                    value = { this.state.password }
                    //value = { this.state.password }
                    //// onChangeText = {(text) => this.setState({ text })}
                    secureTextEntry = { true }
                />
                <Button
                    onPress = {this._isPressLogin}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black',}}
                    title = 'Log In'
                    color = 'transparent'>
                </Button>
                <Text 
                    onPress = {this._isPressRegister}
                    style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                            color: 'white', fontFamily: 'sans-serif-medium'}}>
                    Create Account
                </Text>
            </View>
        )
    }
    
    _isPressLogin = () => {
        this.props.navigator.push({
            title: 'Map',
            name: 'Map',
            username: this.state.username
        })
    }
    _isPressRegister = () => {
        this.props.navigator.push({
            title: 'Register',
            name: 'Register',
            //username: this.state.username
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'rgb(80, 203, 102)',
        justifyContent: 'center',
        alignItems: 'center',
        //resizeMode: 'cover',
    },
    container2: {
        flex: 1,
        width: undefined,
        height: undefined,
        //backgroundColor: 'rgb(80, 203, 102)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containter3: {
        flex: 1,
        width: undefined,
        height: undefined,
        //backgroundColor: 'rgb(80, 203, 102)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
