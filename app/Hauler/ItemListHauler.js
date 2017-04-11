import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView, TouchableHighlight, Image, StyleSheet
} from 'react-native'

export default class ItemListHauler extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <TouchableHighlight onPress={this._viewItemDetail} style={{borderColor: 'gray', borderWidth: 1}}>
                <View style= {{flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: 'http://www.clker.com/cliparts/5/c/a/7/1194994548636809686emptybox.svg.hi.png'}}
                        />
                    </View>
                    <View style={{flex: 0.8}}>
                        <Text>Item name: { this.props.info.name }</Text>
                        <Text>Description: { this.props.info.description }</Text>
                        <Text>Payment: { this.props.info.payment }{'\n'}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _viewItemDetail = (name) => {
        this.props.navigator.push({
            title: 'Pickup Item Page',
            name: 'ItemPagePickup',
            passProps: {
                name: this.props.info.owner_name,
                title: this.props.info.name,
                description: this.props.info.description,
                payment: this.props.info.payment,
                size: this.props.info.size,
                weight: this.props.info.weight,
                address: this.props.info.address,
                city: this.props.info.city,
                state: this.props.info.state,
                zipcode: this.props.zipcode,
                phone_number: this.props.info.phone,
                view: true
            }
        })
    }
}
