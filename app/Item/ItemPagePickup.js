import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Image, ScrollView, StyleSheet, Dimensions
} from 'react-native'

import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();
var {height, width} = Dimensions.get('window');

export default class ItemPagePickup extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                        name: '',
                        payment: '',
                        description: '',
                        size: '',
                        weight: '',
                        address: '',
                        city: '',
                        state: '',
                        zipcode: ''}
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{flex: 0.4}}>
                        <Image
                            style={{flex: 1, position: 'relative'}}
                        source={{uri: 'https://cnet1.cbsistatic.com/img/B3u_kAp-a5RdLn28Am12VaRsqY8=/300x620/2015/05/16/0b0dfa43-041a-4fd0-9fde-025efbe9b721/ge-french-door-refrigerator-pfe28rshss-product-photos-21.jpg'}}
                        />
                </View>
                <ScrollView style={{flex: 0.6, flexDirection: 'column'}}>

                    <View style={{flex: 0.25, borderWidth: 0.5, borderColor: 'gray'}}>
                        <Text>  </Text> 
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{"\t"}{ this.props.title }{"\t\t\t\t\t"}{ this.props.payment }{"\n"}</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\t"}by {this.props.name}{"\t\t\t"}Contact: {this.props.phone_number}{"\n"}</Text>
                    </View>
                    <View style={{flex: 0.75, flexDirection: 'row'}}>
                        <View style={{flex: 0.025}}>
                            <Text>  </Text>
                        </View>

                        <View style={{flex: 0.975}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{"\n"}Description</Text>
                            <Text style={{fontSize: 20}}>{ this.props.description }{"\n"}</Text>

                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Item Specifics</Text>
                            <Text style={{fontSize: 20}}>Size: { this.props.size }{"\n"}</Text>
                            <Text style={{fontSize: 20}}>Weight: { this.props.weight }{"\n"}</Text>

                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pickup Details</Text>
                            <Text style={{fontSize: 20}}>Location: { this.props.address }, { this.props.city }, { this.props.state } { this.props.zipcode }</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{flex: 0.1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#50cb66'}}>
                <View style={{flex: 0.44}}>
                        <Text>  </Text>
                </View>
                <View style={{flex: 0.25}}>
                    <Button
                        onPress = {this._onPressRequest}
                        style = { styles.button }
                        title = 'Request'
                        color = '#50cb66'>
                    </Button>
                </View>
                <View style={{flex: 0.03}}>
                    <Text>  </Text>
                </View>
                <View style={{flex: 0.25}}>
                    <Button
                        onPress = {this._onPressBack}
                        style = { styles.button }
                        title = 'Back'
                        color = '#50cb66'>
                    </Button>
                </View>
                <View style={{flex: 0.03}}>
                    <Text>  </Text>
                </View>
            </View>
            </View>
        )
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }
    _onPressRequest = () => {
        alert('Item added to Pickups.');
        var data = {
                    description: this.props.description,
                    name       : this.props.title,
                    address    : this.props.address,
                    city       : this.props.city,
                    state      : this.props.state,
                    zipcode    : this.props.zipcode,
                    payment    : this.props.payment,
                    // pickupDate : this.state.pickupDate,
                    size       : this.props.size,
                    // time       : this.state.time,
                    // title      : this.state.title,
                    weight     : this.props.weight,
                };
        app.addItem(this.props.username, data);
    }
}


const styles = StyleSheet.create({
    button: {
        height: 30, 
        borderWidth: 1, 
        borderColor: '#50cb66', 
        backgroundColor: '#50cb66' 
    }
})
