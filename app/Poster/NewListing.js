import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {  title: '',
                        item: '',
                        description: '',
                        size: '',
                        weight: '',
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
                    </ScrollView>
                </View>
                <View style={{}}>
                    <Button
                        onPress = {this._isPress}
                        style = {{height: 30, borderWidth: 1, borderColor: 'black' }}
                        title = 'Continue'
                        color = 'black'>
                    </Button>
                </View>
            </View>

        )
    }

    _isPress = () => {
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
}
