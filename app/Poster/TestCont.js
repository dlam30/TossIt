import React, { Component } from 'react'
import {
   View, Text, Button, TextInput
} from 'react-native'

export default class TestCont extends Component {
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
                <Text>//FIXME: should be a scroll box</Text>


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
            title: 'NewListingContinued',
            name: 'NewListingContinued',
            // username: this.state.username
        })
    }
}
