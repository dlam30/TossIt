import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={{borderColor: 'gray', borderWidth: 1}}>
                <Text>Item name: { this.props.info.item }</Text>
                <Text>Description: { this.props.info.description }</Text>
                <Text>Payment: { this.props.info.payment }{'\n'}</Text>
            </View>
        )
    }
}
