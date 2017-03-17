import React, { Component } from 'react'
import {
   View, Text, Button, TextInput
} from 'react-native'
import ApiHandler from '../API/ApiHandler'

export default class NewListingContinued extends Component {
    constructor(props) {
        super(props);
        this.state = {  location: '',
                        pickupDate: '',
                        time: '',
                        payment: '',
                        helperText: ''}
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

                <View style={{flex: 1}}>
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

    _isPress = () => {
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
        var array = [];
        this.refs.db.postItem(this.props.username, this.props.item, data);
        alert('Posted!');
        this.props.navigator.popN(2);
    }
}
