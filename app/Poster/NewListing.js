import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView, StyleSheet, Dimensions
} from 'react-native'
import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();
var {height, width} = Dimensions.get('window');

export default class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {  title: '',
                        item: '',
                        description: '',
                        size: '',
                        weight: '',
                        location: '',
                        pickupDate: '',
                        time: '',
                        payment: '',
                        helperText: 'Tap any field to get started!'}
    }
    render() {
        return (
            <View style={ styles.container }>
            {/*
                <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color: 'gray', fontWeight: 'bold'}}>
                        {this.state.helperText}
                    </Text>
                </View>
                */}
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                    {/*
                        <Text>Title: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ title: text })}
                            placeholder = ''
                            value = { this.state.title }
                            onFocus = {() => this.setState({ helperText: 'Give your listing a title.' })}
                        /> */}

                        <Text>Item: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ item: text })}
                            placeholder = 'Item name'
                            value = { this.state.item }
                            onFocus = {() => this.setState({ helperText: 'What do you want to have removed?' })}
                        />

                        <Text>Description: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ description: text })}
                            placeholder = 'Item description'
                            value = { this.state.description }
                            onFocus = {() => this.setState({ helperText: 'Provide a description or special instructions.' })}
                        />

                        <Text>Size: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ size: text })}
                            placeholder = 'Size of the item'
                            value = { this.state.size }
                            onFocus = {() => this.setState({ helperText: 'What are the dimensions of your item?' })}
                        />

                        <Text>Weight: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ weight: text })}
                            placeholder = 'Weight of the item'
                            value = { this.state.weight }
                            onFocus = {() => this.setState({ helperText: 'How much does your item weigh approximately?' })}
                        />
                        <Text>Location: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ location: text })}
                            placeholder = 'Address e.g. 750 Ferst Dr NW, Atlanta, GA 30318'
                            value = { this.state.location }
                            onFocus = {() => this.setState({ helperText: 'Where is your junk located?' })}
                        />
                        {/*
                        <Text>Pickup Date: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ pickupDate: text })}
                            placeholder = 'Available date to pick up'
                            value = { this.state.pickupDate }
                            onFocus = {() => this.setState({ helperText: 'What DAY do you want the hauler come?' })}
                        />

                        <Text>Pickup Time: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ pickupTime: text })}
                            placeholder = 'Available time to '
                            value = { this.state.pickupTime }
                            onFocus = {() => this.setState({ helperText: 'What TIME should the hauler arrive?' })}
                        /> */}

                        <Text>Payment Amount: </Text>
                        <TextInput
                            style = { styles.textField }
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ payment: text })}
                            placeholder = 'Money that pay to the hauler'
                            value = { this.state.payment }
                            onFocus = {() => this.setState({ helperText: 'How much do you want to pay to have your item removed?' })}
                        />
                    </ScrollView>
                </View>
                <View style={{}}>

                    <Button
                        onPress = {this._onPressPost}
                        style = {{height: 30, borderWidth: 1, borderColor: 'white' }}
                        title = 'Post'
                        color = '#50cb66'>
                    </Button>
                    <Button
                        onPress = {this._onPressBack}
                        style = {{height: 30, borderWidth: 1, borderColor: 'white' }}
                        title = 'Go Back'
                        color = '#50cb66'>
                    </Button>
                </View>
            </View>

        )
    }

    checkMissingFields = () => {
        if (this.state.description == '' || this.state.item == '' || this.state.location == '' ||
            this.state.payment == '' || this.state.size == '' || this.state.weight == '') {
                alert('Some fields are missing.\nPlease complete the form.');
                return false;
        }
        return true;
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }

    _onPressPost = () => {
        var data = {
            description: this.state.description,
            name       : this.state.item,
            location   : this.state.location,
            payment    : this.state.payment,
            // pickupDate : this.state.pickupDate,
            size       : this.state.size,
            // time       : this.state.time,
            // title      : this.state.title,
            weight     : this.state.weight
        }
        if (this.checkMissingFields()) {
            app.postItem(this.props.username, data);
            alert('Posted!');
            this.props.navigator.pop();
        }
        // var array = [];
        // var count = 0;
        // var routes = this.props.navigator.state.routeStack;
        // app.getItem(this.props.username, (response) => {
        //     for (var key in response) {
        //         if (response.hasOwnProperty(key)) {
        //             var obj = response[key];
        //             array[count] = obj;
        //             count++;
        //         }
        //     }
        //     for (var i = routes.length - 1; i >= 0; i--) {
        //         if (routes[i].name == 'MyListings') {
        //             var destRoute = this.props.navigator.getCurrentRoutes()[i];
        //             destRoute.passProps = {
        //                 array: array
        //             }
        //             this.props.navigator.popToRoute(destRoute);
        //         }
        //     }
        // })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#50cb66',
        justifyContent: 'center',
        alignItems: 'center',
        //resizeMode: 'cover',
    },
    textField: {
        flex: 1,
        width: width,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        backgroundColor: '#50cb66',
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
