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
                        address: '',
                        city: '',
                        state: '',
                        zipcode: '',
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
                <View style={{flex: 0.8}}>
                    <ScrollView style={{flex: 1, width: width/1.1}}>
                        <Text> </Text>

                        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'white'}}>
                            New Listing
                        </Text>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Item: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ item: text })}
                                    placeholder = 'Item name'
                                    value = { this.state.item }
                                    onFocus = {() => this.setState({ helperText: 'What do you want to have removed?' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Description: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ description: text })}
                                    placeholder = 'Item description'
                                    value = { this.state.description }
                                    onFocus = {() => this.setState({ helperText: 'Provide a description or special instructions.' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Size: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ size: text })}
                                    placeholder = 'Size of the item'
                                    value = { this.state.size }
                                    onFocus = {() => this.setState({ helperText: 'What are the dimensions of your item?' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Weight: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ weight: text })}
                                    placeholder = 'Weight of the item'
                                    value = { this.state.weight }
                                    onFocus = {() => this.setState({ helperText: 'How much does your item weigh approximately?' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Location: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ location: text })}
                                    placeholder = 'Address e.g. 750 Ferst Dr NW, Atlanta, GA 30318'
                                    value = { this.state.location }
                                    onFocus = {() => this.setState({ helperText: 'Where is your junk located?' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.3, flexDirection: 'column'}}>
                                <Text style={styles.label}>Payment{"\n"}Amount: </Text>
                            </View>
                            <View style={{flex: 0.7}}>
                                <TextInput
                                    style = { styles.textField }
                                    underlineColorAndroid = 'rgba(0,0,0,0)'
                                    onChangeText = {(text) => this.setState({ payment: text })}
                                    placeholder = 'Amount paid to hauler'
                                    value = { this.state.payment }
                                    onFocus = {() => this.setState({ helperText: 'How much do you want to pay to have your item removed?' })}
                                />
                            </View>
                        </View>

                        <Text> </Text>

                        {/*<TextInput
                            style = { styles.textField }
                        />*/}
                    </ScrollView>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row', width: width/1.1}}>
                    <View style={{flex: 0.57}}>
                        <Text>  </Text>
                    </View>

                    <View style={{flex: 0.2}}>
                        <Button
                            onPress = {this._onPressPost}
                            style = { styles.button }
                            title = 'Post'
                            color = '#50cb66'>
                        </Button>
                    </View>

                    <View style={{flex: 0.03}}>
                        <Text>  </Text>
                    </View>

                    <View style={{flex: 0.22}}>
                        <Button
                            onPress = {this._onPressBack}
                            style = { styles.button }
                            title = 'Cancel'
                            color = '#50cb66'>
                        </Button>
                    </View>
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
        var splitAddress = this.state.location.split(',');
        var splitState = this.removeSpaces(splitAddress[2]).split(' ');
        var data = {
            description: this.state.description,
            name       : this.state.item,
            address    : this.removeSpaces(splitAddress[0]),
            city       : this.removeSpaces(splitAddress[1]),
            state      : this.removeSpaces(splitState[0]),
            zipcode    : this.removeSpaces(splitState[1]),
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

    // A function to remove spaces at head and tail of a string
    removeSpaces = (str) => {
        var result = '';
        for (var i = 0; i < str.length; i++) {
            if (i != 0 && i != str.length - 1) result += str.charAt(i);
            if (i == 0 && str.charAt(i) != ' ') result += str.charAt(i);
            if (i == str.length - 1 && str.charAt(i) != ' ') result += str.charAt(i)
        }
        return result;
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

    label: {
        color: 'white'
    },

    textField: {
        flex: 1,
        width: width,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',//'#50cb66',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 3
    },

    button: {
        height: 30, 
        borderWidth: 3, 
        borderColor: 'white', 
        borderRadius: 1,
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
