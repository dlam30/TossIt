import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class NewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '',
                        item: '',
                        description: '',
                        size: '',
                        weight: ''}
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <Text>Upload picture/picture displayed here</Text>
                </View>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <Text>Title: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ title: text })}
                            placeholder = 'Type here'
                            value = { this.state.title }
                        />

                        <Text>Item: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ item: text })}
                            placeholder = 'Type item here'
                            value = { this.state.item }
                        />

                        <Text>Description: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ description: text })}
                            placeholder = 'Type description here'
                            value = { this.state.description }
                        />

                        <Text>Size: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ size: text })}
                            placeholder = 'Type size here'
                            value = { this.state.size }
                        />

                        <Text>Weight: </Text>
                        <TextInput
                            style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            onChangeText = {(text) => this.setState({ weight: text })}
                            placeholder = 'Type weight here'
                            value = { this.state.weight }
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
