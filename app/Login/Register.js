import React, { Component } from 'react'
import {
   View, Text, TouchableHighlight, TextInput, Image, StyleSheet, Navigator,
   Dimensions, Button, StatusBar
} from 'react-native'
import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();

var {height, width} = Dimensions.get('window');

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                      name: '',
                      password: '',
                      verifyPassword: '',
                      email: '',
                      phone: ''}
    }
    render() {
        return (
            //<Image source = {require('../Images/ST.jpg')}
            <View style = {styles.container}>
                <Image source = {require('../Images/logo@3x.png')}>
                </Image>

                <Text style = {{color: 'white', fontFamily: 'sans-serif-medium', paddingTop: 56, paddingBottom: 15,}}>
                    Pick up with TossIt
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ username: text })}
                    placeholder = 'Username'
                    value = { this.state.username }
                />
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ name: text })}
                    placeholder = 'Name'
                    value = { this.state.name }
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
                <Text>
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ verifyPassword: text })}
                    placeholder = 'Verify Password'
                    value = { this.state.verifyPassword }
                    //value = { this.state.password }
                    //// onChangeText = {(text) => this.setState({ text })}
                    secureTextEntry = { true }
                />
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ email: text })}
                    placeholder = 'Email Address'
                    value = { this.state.email }
                />
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ phone: text })}
                    placeholder = 'Phone Number (XXX-XXX-XXXX)'
                    value = { this.state.phone }
                />
                <Button
                    onPress = {this._createUser}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black', }}
                    title = 'Create Account'
                    color = 'transparent'>
                </Button>
                <Button
                    onPress = {this._isPressLogin}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black', }}
                    title = 'Cancel'
                    color = 'transparent'>
                </Button>
                {/*
                <Text
                    onPress = {this._isPressLogin}
                    style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                            color: 'white', fontFamily: 'sans-serif-medium', }}>
                    Placeholder to go Back
                </Text>
                <TouchableHighlight
                    onPress = {this._isPressLogin}
                    underlayColor = 'gray'>
                    <Text style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                            color: 'white', fontFamily: 'sans-serif-medium'}}>
                        Touchable Back
                    </Text>
                </TouchableHighlight>
                */}

            </View>
        )
    }

    _createUser = () => {
        if (this.state.password != this.state.verifyPassword) {
            alert('Password mismatch !!\nPlease check.');
        } else {
            var info = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone
            }
            app.createNewUser(this.state.username.toLowerCase(),
                    info, this.state.password, (response, success) => {
                alert(response);
                if (success) this._isPressLogin();
            });
        }
    }

    _isPressLogin = () => {
        this.props.navigator.push({
            title: 'Login',
            name: 'Login',
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
