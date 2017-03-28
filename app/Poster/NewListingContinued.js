import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'
import ApiHandler from '../API/ApiHandler'

export default class NewListingContinued extends Component {
    constructor(props) {
        super(props);
        this.state = {  location: '',
                        pickupDate: '',
                        time: '',
                        payment: '',
                        helperText: 'Almost Done!'}
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <ApiHandler ref='db'/>
                <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color: 'gray', fontWeight: 'bold'}}>
                        {this.state.helperText}
                    </Text>
                </View>

                <ScrollView style={{flex: 1}}>
                    <Text>Location: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ location: text })}
                        placeholder = ''
                        value = { this.state.location }
                        onFocus = {() => this.setState({ helperText: 'Where is your junk located?' })}
                    />

                    <Text>Pickup Date: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ pickupDate: text })}
                        placeholder = ''
                        value = { this.state.pickupDate }
                        onFocus = {() => this.setState({ helperText: 'What DAY do you want the hauler come?' })}
                    />

                    <Text>Pickup Time: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ pickupTime: text })}
                        placeholder = ''
                        value = { this.state.pickupTime }
                        onFocus = {() => this.setState({ helperText: 'What TIME should the hauler arrive?' })}
                    />

                    <Text>Payment Amount: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ payment: text })}
                        placeholder = ''
                        value = { this.state.payment }
                        onFocus = {() => this.setState({ helperText: 'How much do you want to pay to have your item removed?' })}
                    />
                </ScrollView>

                <View style={{}}>
                    <Button
                        onPress = {this._onPressPost}
                        style = {{height: 30, borderWidth: 1, borderColor: 'gray' }}
                        title = 'Post'
                        color = 'limegreen'>
                    </Button>
                    <Button
                        onPress = {this._onPressBack}
                        style = {{height: 30, borderWidth: 1, borderColor: 'gray' }}
                        title = 'Go Back'
                        color = 'limegreen'>
                    </Button>
                </View>
            </View>

        )
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }

    _onPressPost = () => {
        var data = {
            description: this.props.description,
            item       : this.props.item,
            location   : this.state.location,
            payment    : this.state.payment,
            pickupDate : this.state.pickupDate,
            size       : this.props.size,
            time       : this.state.time,
            title      : this.props.title,
            weight     : this.props.weight
        }
        //this.refs.db.postItem(username, data);
        this.refs.db.postItem(this.props.username, this.props.item, data);
        alert('Posted!');

        var array = [];
        var count = 0;
        var routes = this.props.navigator.state.routeStack;
        this.refs.db.getItem(this.props.username, (response) => {
            for (var key in response) {
                if (response.hasOwnProperty(key)) {
                    var obj = response[key];
                    array[count] = obj;
                    count++;
                }
            }
            for (var i = routes.length - 1; i >= 0; i--) {
                if (routes[i].name == 'MyListings') {
                    var destRoute = this.props.navigator.getCurrentRoutes()[i];
                    destRoute.passProps = {
                        array: array
                    }
                    this.props.navigator.popToRoute(destRoute);
                }
            }
        })

    }
}
