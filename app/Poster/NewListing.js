import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'
import ApiHandler from '../API/ApiHandler'

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
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color: 'gray', fontWeight: 'bold'}}>
                        {this.state.helperText}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <Text>Title: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ title: text })}
                            placeholder = ''
                            value = { this.state.title }
                            onFocus = {() => this.setState({ helperText: 'Give your listing a title.' })}
                        />

                        <Text>Item: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ item: text })}
                            placeholder = ''
                            value = { this.state.item }
                            onFocus = {() => this.setState({ helperText: 'What do you want to have removed?' })}
                        />

                        <Text>Description: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ description: text })}
                            placeholder = ''
                            value = { this.state.description }
                            onFocus = {() => this.setState({ helperText: 'Provide a description or special instructions.' })}
                        />

                        <Text>Size: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ size: text })}
                            placeholder = ''
                            value = { this.state.size }
                            onFocus = {() => this.setState({ helperText: 'What are the dimensions of your item?' })}
                        />

                        <Text>Weight: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ weight: text })}
                            placeholder = ''
                            value = { this.state.weight }
                            onFocus = {() => this.setState({ helperText: 'How much does your item weigh approximately?' })}
                        />
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
                </View>
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

    _onPressCont = () => {
        alert(this.props.username);

        this.props.navigator.push({
            title: 'New Listing cont..',
            name: 'NewListingContinued',
            passProps : {
                title: this.state.title,
                item: this.state.item,
                description: this.state.description,
                size: this.state.size,
                weight: this.state.weight,
                username: this.props.username
            }
            // username: this.state.username
        })
    }

    _onPressPost = () => {
        var data = {
            description: this.state.description,
            item       : this.state.item,
            location   : this.state.location,
            payment    : this.state.payment,
            pickupDate : this.state.pickupDate,
            size       : this.state.size,
            time       : this.state.time,
            title      : this.state.title,
            weight     : this.state.weight
        }
        // //this.refs.db.postItem(username, data);
        // var array = [];
        // // alert(this.props.username);
        // // alert(this.state.item);
        // this.refs.db.postItem(this.props.username, this.state.item, data);
        // alert('Posted!');
        // this.props.navigator.popN(2);

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
