import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView, TouchableHighlight
} from 'react-native'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <TouchableHighlight onPress={this._viewItemDetail}>
                <View style={{borderColor: 'gray', borderWidth: 1}}>
                    <Text>Item name: { this.props.info.name }</Text>
                    <Text>Description: { this.props.info.description }</Text>
                    <Text>Payment: { this.props.info.payment }{'\n'}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _viewItemDetail = (name) => {
        this.props.navigator.push({
            title: 'Item page',
            name: 'ItemPage',
            passProps: {
                username: this.props.username,
                name: this.props.info.name,
                description: this.props.info.description,
                payment: this.props.info.payment,
                size: this.props.info.size,
                weight: this.props.info.weight,
                address: this.props.info.address,
                city: this.props.info.city,
                state: this.props.info.state,
                zipcode: this.props.zipcode
            }
        })
    }
}